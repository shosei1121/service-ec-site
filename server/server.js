require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Stripe (only init if key exists)
let stripe = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
}

app.use(cors({ origin: CLIENT_URL }));

// Webhook needs raw body
app.post("/api/webhook", express.raw({ type: "application/json" }), (req, res) => {
  if (!stripe) return res.status(500).json({ error: "Stripe not configured" });

  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log("✅ 決済完了:", session.id);
        console.log("   顧客:", session.customer_details?.email);
        console.log("   合計:", session.amount_total, session.currency);
        break;
      case "checkout.session.async_payment_succeeded":
        console.log("✅ 非同期決済成功（銀行振込等）:", event.data.object.id);
        break;
      case "checkout.session.async_payment_failed":
        console.log("❌ 非同期決済失敗:", event.data.object.id);
        break;
      default:
        console.log("📨 イベント:", event.type);
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

app.use(express.json());

// Products API
app.get("/api/products", (req, res) => {
  const { category } = req.query;
  if (category && category !== "すべて") {
    return res.json(products.filter((p) => p.category === category));
  }
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "商品が見つかりません" });
  res.json(product);
});

// Stripe Checkout
app.post("/api/create-checkout-session", async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: "Stripe未設定。.envファイルにSTRIPE_SECRET_KEYを設定してください。" });
  }

  try {
    const { items } = req.body; // [{ id, quantity }]

    const lineItems = items.map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) throw new Error(`商品が見つかりません: ${item.id}`);

      return {
        price_data: {
          currency: "jpy",
          product_data: {
            name: `${product.icon} ${product.name} - ${product.nameJa}`,
            description: product.description.substring(0, 200),
          },
          unit_amount: product.price,
        },
        quantity: item.quantity || 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/cart`,
      locale: "ja",
      payment_intent_data: {
        payment_method_options: {
          card: {
            request_three_d_secure: "automatic",
          },
        },
      },
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error("Checkout error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Categories
app.get("/api/categories", (req, res) => {
  const categories = [...new Set(products.map((p) => p.category))];
  res.json(["すべて", ...categories]);
});

app.listen(PORT, () => {
  console.log(`🚀 サーバー起動: http://localhost:${PORT}`);
  if (!stripe) {
    console.log("⚠️  Stripe未設定 — .envファイルを確認してください");
  } else {
    console.log("✅ Stripe連携済み");
  }
});
