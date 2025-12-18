
import json
import os

# Source file
source_path = '/home/sandbox/craftedbycss/public/brand.json'
output_dir = '/home/sandbox/craftedbycss/public/animations'

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Theme colors (Normalized RGB [0-1])
# Original Amber: [1, 0.2667, 0]
colors = {
    'brand-identity.json': [1, 0.2667, 0],          # Amber (Original)
    'website-design.json': [0.216, 0.188, 0.639],   # Indigo (#3730a3)
    'art-direction.json': [0.024, 0.714, 0.831],    # Cyan (#06B6D4)
    'development.json': [0.937, 0.267, 0.267]       # Rose (#EF4444)
}

def replace_color(obj, target_color):
    if isinstance(obj, dict):
        # Check if this dict represents a color property
        # Lottie colors are often in "c": {"k": [r, g, b, a]} or just "k": [r, g, b]
        # In brand.json we saw: "c":{"a":0,"k":[1,0.2667,0],"ix":4}
        if 'c' in obj and isinstance(obj['c'], dict) and 'k' in obj['c']:
            color_val = obj['c']['k']
            if isinstance(color_val, list) and len(color_val) >= 3:
                # Check if it matches the original amber color (approx)
                r, g, b = color_val[0], color_val[1], color_val[2]
                if r > 0.9 and g > 0.2 and g < 0.3 and b < 0.1:
                     # Preserve alpha if present (4th component)
                    new_color = target_color + (color_val[3:] if len(color_val) > 3 else [])
                    obj['c']['k'] = new_color
        
        for key, value in obj.items():
            replace_color(value, target_color)
    elif isinstance(obj, list):
        for item in obj:
            replace_color(item, target_color)

# Read source
with open(source_path, 'r') as f:
    base_data = json.load(f)

# Generate files
for filename, color in colors.items():
    # Deep copy by parsing JSON again (simplest way to ensure no ref issues)
    data = json.loads(json.dumps(base_data))
    
    # Replace colors
    replace_color(data, color)
    
    # Write to file
    out_path = os.path.join(output_dir, filename)
    with open(out_path, 'w') as f:
        json.dump(data, f)
    print(f"Generated {out_path}")
