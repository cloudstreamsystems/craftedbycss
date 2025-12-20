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
    # Main Oranges (Fills/Backgrounds) -> Transparent (was Target Orange)
    (1, 0.5569, 0.2275): [1, 0.2667, 0, 0],
    
    # Tags (HTML, CSS, Code) -> Target Orange (Visible on White)
    (1, 0.4431, 0): [1, 0.2667, 0],
    
    # Browns/Darks (Lines/Structure) -> White (Visible)
    (0.7668, 0.7117, 0.3532): [1, 0.2667, 0, 0], # Changed to Transparent (likely shadow)
    (0.4773, 0.3557, 0.2627): [1, 1, 1],
    (0.558, 0.4356, 0.342): [1, 1, 1],
    (0.2852, 0.2226, 0.1748): [1, 1, 1],
    
    # Lights (Negative Space) -> White (Visible Text)
    (0.9961, 0.9608, 0.7412): [1, 1, 1],
    (1, 0.9867, 0.9): [1, 1, 1],
    (0.9675, 0.9415, 0.7725): [1, 1, 1]
}

cyber_color_map = {
    # Strokes (Blue/Red) -> White
    (0, 0.1686, 1): [1, 1, 1],
    (1, 0, 0.3137): [1, 1, 1],
    
    # Fills (Pink/Dark Blue/Purple) -> #28236b
    (0.8902, 0.0863, 0.3569): [0.1569, 0.1373, 0.4196],
    (0.0941, 0.0784, 0.6824): [0.1569, 0.1373, 0.4196],
    (0.3608, 0.1765, 0.8): [0.1569, 0.1373, 0.4196],
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
        'color': [1, 0.2667, 0, 0], # Transparent fallback
        'color_map': website_color_map, # Use specific map
        'scale_layers': {
            'HTML': 1.8,
            'CSS': 1.8,
            'Code': 1.8,
            'Bracket': 1.8
        }
    },
    {
        'source': 'CYBER.json',
        'output': 'cybersecurity.json',
        'color': [1, 1, 1],
        'color_map': cyber_color_map
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
                        new_val = color_map[current_rgb]
                        
                        # Handle RGBA in map
                        if len(new_val) == 4:
                             obj['c']['k'] = new_val
                             # If alpha is 0, set opacity to 0
                             if new_val[3] == 0:
                                 obj['o'] = {'k': 0}
                        else:
                            # Preserve alpha if present in original but not in map
                            new_color = new_val + (color_val[3:] if len(color_val) > 3 else [])
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
                    if len(target_color) == 4:
                        obj['c']['k'] = target_color
                        # If alpha is 0, set opacity to 0
                        if target_color[3] == 0:
                            obj['o'] = {'k': 0}
                    else:
                        new_color = target_color + (color_val[3:] if len(color_val) > 3 else [])
                        obj['c']['k'] = new_color
        
        for key, value in obj.items():
            replace_color(value, target_color, preserve_light, color_map)
    elif isinstance(obj, list):
        for item in obj:
            replace_color(item, target_color, preserve_light, color_map)

def scale_layer(layer, scale_factor):
    """Scales a layer's transform properties."""
    if 'ks' in layer and 's' in layer['ks']:
        scale_prop = layer['ks']['s']
        # Handle animated scale (keyframed)
        if 'a' in scale_prop and scale_prop['a'] == 1: 
            for kf in scale_prop['k']:
                if 's' in kf and isinstance(kf['s'], list):
                    # Scale X and Y, leave Z (index 2) alone if present
                    kf['s'] = [x * scale_factor if i < 2 else x for i, x in enumerate(kf['s'])]
        # Handle static scale
        elif 'k' in scale_prop and isinstance(scale_prop['k'], list):
             scale_prop['k'] = [x * scale_factor if i < 2 else x for i, x in enumerate(scale_prop['k'])]

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

    # Apply layer scaling if configured
    if 'scale_layers' in config:
        if 'layers' in data:
            for layer in data['layers']:
                if 'nm' in layer and layer['nm'] in config['scale_layers']:
                    factor = config['scale_layers'][layer['nm']]
                    scale_layer(layer, factor)
    
    # Write to file
    with open(output_path, 'w') as f:
        json.dump(data, f)
    print(f"Generated {output_path}")
