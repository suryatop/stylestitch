import os
import re

# File paths
recommended_images_path = "/Users/suryatopsasmal/Project/stylestitch/recommended_images.js"
all_product_path = "/Users/suryatopsasmal/Project/stylestitch/merged_products.js"
merged_file_path = "/Users/suryatopsasmal/Project/stylestitch/src/Component/Assets/all_product.js"

# Function to extract product data from a file
def extract_product_data(file_content, data_var_name):
    # Regex to match the product list in JS file
    product_regex = re.compile(f"{data_var_name} = \[(.*?)\];", re.DOTALL)
    matches = product_regex.findall(file_content)
    if matches:
        product_list = matches[0].strip()
        return product_list
    return ""

# Function to extract import statements
def extract_imports(file_content):
    import_regex = re.compile(r"(import .*? from .*?;)")
    imports = import_regex.findall(file_content)
    return "\n".join(imports)

# Function to merge products and handle changes dynamically
def merge_files():
    merged_content = ""
    
    # Read content of recommended_images.js
    if os.path.exists(recommended_images_path):
        with open(recommended_images_path, "r") as file:
            recommended_content = file.read()
            # Extract product data and imports
            recommended_products = extract_product_data(recommended_content, "let data_product")
            recommended_imports = extract_imports(recommended_content)
    else:
        recommended_products = ""
        recommended_imports = ""
    
    # Read content of all_product.js
    if os.path.exists(all_product_path):
        with open(all_product_path, "r") as file:
            all_product_content = file.read()
            # Extract product data from all_product.js
            all_product_data = extract_product_data(all_product_content, "let all_product")
    else:
        all_product_data = ""
    
    # Combine the imports and the product data into a single merged string
    merged_content += recommended_imports + "\n\n"
    
    # Combine the product lists
    merged_products = f"let all_product = [\n{recommended_products},\n{all_product_data}\n];"
    
    # Write the merged content to the new file
    with open(merged_file_path, "w") as file:
        file.write(merged_content)
        file.write(merged_products)
    
    print(f"Merged content has been written to: {merged_file_path}")

# Run the merge function
merge_files()
