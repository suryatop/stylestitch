import pandas as pd
import os
import threading

# Load dataset
data_path = '/Users/suryatopsasmal/Downloads/myntra_processed.csv'
df = pd.read_csv(data_path)

#Dhruv's Contribute Starts
# Function to determine the category based on the product name
def determine_category(product_name):
    product_name = product_name.lower().strip()  # Normalize the product name
    # Check for kids first to prioritize them
    if any(keyword in product_name for keyword in ['boy', 'girl', 'kids', 'children']):
        return 'kids'
    elif 'women' in product_name or 'female' in product_name:  # Check for women next
        return 'women'
    elif 'men' in product_name or 'male' in product_name:  # Check for men last
        return 'men'
    return 'other'  # Use 'other' for products that don't fit any category

#Dhruv's Contribute ENDS

# Function to sample products from each category
def sample_products(df, n=10):
    men_products = df[df['category'] == 'men'].sample(n=min(n, len(df[df['category'] == 'men'])), replace=False)
    women_products = df[df['category'] == 'women'].sample(n=min(n, len(df[df['category'] == 'women'])), replace=False)
    kids_products = df[df['category'] == 'kids'].sample(n=min(n, len(df[df['category'] == 'kids'])), replace=False)
    
    return men_products, women_products, kids_products

# Function to generate JS code for product recommendations
def generate_js(products):
    js_entries = []
    for index, row in products.iterrows():
        js_entry = f"""{{
            id: {index + 1},  // Using index + 1 as ID
            name: "{row['name']}",
            category: "{row['category']}",
            image: "{row['img']}",
            new_price: {row['price']},
            old_price: {row['mrp']},  // Assuming 'mrp' is the old price column
            purl: "{row['purl']}"  // Assuming there's a 'purl' column
        }}"""
        js_entries.append(js_entry)
    return ',\n'.join(js_entries)

# Main function to process and export recommendations
def recommend_clothing():
    # Assign a category for each product based on the name
    df['category'] = df['name'].apply(determine_category)
    
    # Sample products for each category
    men_products, women_products, kids_products = sample_products(df)
    
    # Debugging: print sampled products for each category
    print("Men's Products:\n", men_products[['name', 'category']])
    print("Women's Products:\n", women_products[['name', 'category']])
    print("Kids' Products:\n", kids_products[['name', 'category']])
    
    # Generate JS code
    men_js = generate_js(men_products)
    women_js = generate_js(women_products)
    kids_js = generate_js(kids_products)
    
    # Combine all generated JS
    combined_js = f"""
let all_product = [
    // Men's Products
    {men_js},
    
    // Women's Products
    {women_js},
    
    // Kids' Products
    {kids_js}
];
export default all_product;
"""
    
    # Output JS file path
    output_path = "/Users/suryatopsasmal/Project/stylestitch/merged_products.js"
    
    # Save the combined JS into the file
    try:
        with open(output_path, 'w') as file:
            file.write(combined_js)
        print(f"JS output saved to {output_path}")
    except Exception as e:
        print(f"Error saving JS output: {e}")

# Run recommendation generation in a separate thread
def run_recommendation_thread():
    recommendation_thread = threading.Thread(target=recommend_clothing)
    recommendation_thread.start()

# Execute the function
run_recommendation_thread()
