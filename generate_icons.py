import os
import base64
import time
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

icons = [
    ("cloud-mgmt", "A sleek, modern flat icon of a cloud with connected nodes and a dashboard interface, blue tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("ai-analytics", "A sleek, modern flat icon of a brain made of circuit patterns with data visualization charts, purple tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("security-monitor", "A sleek, modern flat icon of a shield with a digital eye and scanning lines, red tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("api-gateway", "A sleek, modern flat icon of interconnected API endpoints with flowing data streams, cyan tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("db-optimizer", "A sleek, modern flat icon of a database with lightning bolt and optimization gears, amber/yellow tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("mobile-devkit", "A sleek, modern flat icon of a smartphone with code brackets and UI components floating around, green tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("cicd-manager", "A sleek, modern flat icon of a pipeline with arrows showing continuous flow and deployment, indigo tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("team-dashboard", "A sleek, modern flat icon of a team collaboration dashboard with people silhouettes and charts, pink tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("support-ai", "A sleek, modern flat icon of a friendly robot with chat bubbles and support ticket, teal tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("doc-generator", "A sleek, modern flat icon of a document with auto-generation sparkles and code snippets, purple tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("iot-management", "A sleek, modern flat icon of IoT devices connected to a central hub with signal waves, orange tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("blockchain-auth", "A sleek, modern flat icon of a blockchain lock with chain links and verification checkmark, lime green tones, dark background, professional SaaS product icon style, minimalist, high quality"),
    ("perf-monitor", "A sleek, modern flat icon of a performance meter dashboard with real-time graphs and metrics, sky blue tones, dark background, professional SaaS product icon style, minimalist, high quality"),
]

output_dir = "/tmp/service-ec-site/client/public/icons"

for i, (name, prompt) in enumerate(icons):
    print(f"[{i+1}/{len(icons)}] Generating: {name}...")
    try:
        response = client.models.generate_images(
            model="imagen-4.0-fast-generate-001",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="1:1",
                output_mime_type="image/png",
            ),
        )
        
        if response.generated_images:
            img_data = response.generated_images[0].image.image_bytes
            path = os.path.join(output_dir, f"{name}.png")
            with open(path, "wb") as f:
                f.write(img_data)
            print(f"  ✅ Saved: {path} ({len(img_data)} bytes)")
        else:
            print(f"  ❌ No image generated for {name}")
        
        time.sleep(2)  # Rate limit
    except Exception as e:
        print(f"  ❌ Error: {e}")
        time.sleep(5)

print("\nDone!")
