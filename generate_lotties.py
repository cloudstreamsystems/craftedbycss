import json
import os

output_dir = '/home/sandbox/craftedbycss/public/animations'

# Configuration: Source file -> Output filename -> Target Color
# Color is normalized RGB [0-1]
# #ff4400 -> [1, 0.2667, 0]

# Specific color mapping for website-design.json to avoid "blob"
# Revised Strategy:
# Main Orange (Count 20) -> Target Orange (Main Elements/Outlines)
# Darker Orange (Count 5) -> Target Orange (Secondary Elements)
# All others (Shadows, Backgrounds, Fills) -> White (Negative Space)
website_color_map = {
    # Main Oranges (Fills/Backgrounds) -> Target Orange (Blend with card)
    (1, 0.5569, 0.2275): [1, 0.2667, 0],
    (1, 0.4431, 0): [1, 0.2667, 0],
    
    # Browns/Darks (Lines/Structure) -> White (Visible)
    (0.7668, 0.7117, 0.3532): [1, 1, 1],
    (0.4773, 0.3557, 0.2627): [1, 1, 1],
    (0.558, 0.4356, 0.342): [1, 1, 1],
    (0.2852, 0.2226, 0.1748): [1, 1, 1],
    
    # Lights (Negative Space) -> Target Orange
    (0.9961, 0.9608, 0.7412): [1, 0.2667, 0],
    (1, 0.9867, 0.9): [1, 0.2667, 0],
    (0.9675, 0.9415, 0.7725): [1, 0.2667, 0]
}

configs = [
    {
        'source': 'brand.json',
        'output': 'brand-identity.json',
        'color': [1, 1, 1]
    },
    {
        'source': 'website-setup.json',
        'output': 'website-design.json',
        'color': [1, 0.2667, 0], # Default fallback (should be covered by map)
        'color_map': website_color_map # Use specific map
    },
    {
        'source': 'brand.json',
        'output': 'art-direction.json',
        'color': [1, 1, 1]
    },
    {
        'source': 'brand.json',
        'output': 'development.json',
        'color': [1, 1, 1]
    }
]

def replace_color(obj, target_color, preserve_light=False, color_map=None):
    if isinstance(obj, dict):
        # "c": {"k": [r, g, b, ...]}
        if 'c' in obj and isinstance(obj['c'], dict) and 'k' in obj['c']:
            color_val = obj['c']['k']
            if isinstance(color_val, list) and len(color_val) >= 3:
                r, g, b = color_val[0], color_val[1], color_val[2]
                
                # Check specific map first
                if color_map:
                    # Round to match keys
                    current_rgb = (round(r, 4), round(g, 4), round(b, 4))
                    if current_rgb in color_map:
                        new_rgb = color_map[current_rgb]
                        # Preserve alpha if present
                        new_color = new_rgb + (color_val[3:] if len(color_val) > 3 else [])
                        obj['c']['k'] = new_color
                        return # Done for this object

                # Check if it's a light color (background/fill)
                is_light = (r + g + b) > 2.0 # Threshold for "lightness"
                
                if preserve_light and is_light:
                    # Make it white for a cleaner look
                    new_color = [1, 1, 1] + (color_val[3:] if len(color_val) > 3 else [])
                    obj['c']['k'] = new_color
                else:
                    # Replace with target color
                    new_color = target_color + (color_val[3:] if len(color_val) > 3 else [])
                    obj['c']['k'] = new_color
        
        for key, value in obj.items():
            replace_color(value, target_color, preserve_light, color_map)
    elif isinstance(obj, list):
        for item in obj:
            replace_color(item, target_color, preserve_light, color_map)

# Generate files
for config in configs:
    source_path = os.path.join('/home/sandbox/craftedbycss/public', config['source'])
    output_path = os.path.join(output_dir, config['output'])
    
    if not os.path.exists(source_path):
        print(f"Skipping {config['output']}: Source {source_path} not found")
        continue

    with open(source_path, 'r') as f:
        data = json.load(f)
    
    # Replace colors
    replace_color(data, config['color'], config.get('preserve_light', False), config.get('color_map'))
    
    # Write to file
    with open(output_path, 'w') as f:
        json.dump(data, f)
    print(f"Generated {output_path}")
