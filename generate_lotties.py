import json
import os

output_dir = '/home/sandbox/craftedbycss/public/animations'

# Configuration: Source file -> Output filename -> Target Color
# Color is normalized RGB [0-1]
# #ff4400 -> [1, 0.2667, 0]
configs = [
    {
        'source': 'brand.json',
        'output': 'brand-identity.json',
        'color': [1, 0.2667, 0]
    },
    {
        'source': 'website-setup.json',
        'output': 'website-design.json',
        'color': [1, 0.2667, 0] # Fully #ff4400 as requested
    },
    {
        'source': 'brand.json',
        'output': 'art-direction.json',
        'color': [0.0235, 0.7137, 0.8314]
    },
    {
        'source': 'brand.json',
        'output': 'development.json',
        'color': [0.9373, 0.2667, 0.2667]
    }
]

def replace_color(obj, target_color):
    if isinstance(obj, dict):
        # "c": {"k": [r, g, b, ...]}
        if 'c' in obj and isinstance(obj['c'], dict) and 'k' in obj['c']:
            color_val = obj['c']['k']
            if isinstance(color_val, list) and len(color_val) >= 3:
                # For website-setup.json, we want to replace ALL colors
                # For brand.json, we were only replacing specific ones, but replacing all is usually safer for single-color icons
                
                # Preserve alpha if present
                new_color = target_color + (color_val[3:] if len(color_val) > 3 else [])
                obj['c']['k'] = new_color
        
        for key, value in obj.items():
            replace_color(value, target_color)
    elif isinstance(obj, list):
        for item in obj:
            replace_color(item, target_color)

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
    replace_color(data, config['color'])
    
    # Write to file
    with open(output_path, 'w') as f:
        json.dump(data, f)
    print(f"Generated {output_path}")
