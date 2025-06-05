import os
import numpy as np
import pickle
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from tensorflow.keras.layers import GlobalMaxPooling2D
from sklearn.neighbors import NearestNeighbors
from numpy.linalg import norm
import random

# Load feature list and filenames
feature_list = np.array(pickle.load(open('embeddings.pkl', 'rb')))
filenames = pickle.load(open('filenames.pkl', 'rb'))

# Initialize the ResNet50 model
model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
model.trainable = False
model = tf.keras.Sequential([
    model,
    GlobalMaxPooling2D()
])

# Function to extract features from an image
def feature_extraction(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    expanded_img_array = np.expand_dims(img_array, axis=0)
    preprocessed_img = preprocess_input(expanded_img_array)
    result = model.predict(preprocessed_img).flatten()
    normalized_result = result / norm(result)
    return normalized_result

# Function to recommend images based on extracted features
def recommend(features, feature_list, n_neighbors=6):
    available_samples = feature_list.shape[0]
    if n_neighbors > available_samples:
        n_neighbors = available_samples

    neighbors = NearestNeighbors(n_neighbors=n_neighbors, algorithm='brute', metric='euclidean')
    neighbors.fit(feature_list)
    distances, indices = neighbors.kneighbors([features])
    return indices

# Function to handle image recommendation process
def process_image(file_path):
    features = feature_extraction(file_path, model)
    indices = recommend(features, feature_list)
    recommended_images = [os.path.basename(filenames[i]) for i in indices[0]]
    return recommended_images

# Function to save recommendations to a JS file in the specified format
def save_recommendations_to_js(recommendations, output_file='recommended_images.js'):
    with open(output_file, 'w') as f:
        # Write import statements for each image
        for idx, img in enumerate(recommendations, start=1):
            img_import_path = f'./Users/suryatopsasmal/Project/stylestitch/server/src/Component/Assets/your_closet/{img}'  # Update with the correct path
            f.write(f'import p{idx}_img from \'{img_import_path}\'\n')

        # Write data_product array
        f.write('\nlet data_product = [\n')
        for idx in range(1, len(recommendations) + 1):
            f.write(f'  {{\n')
            f.write(f'    id: {idx},\n')
            f.write(f'    name: "preset in closet",\n')
            f.write(f'    category: "mens_closet",\n')
            f.write(f'    image: p{idx}_img,\n')
            f.write(f'  }},\n')
        f.write('];\n\n')
        f.write('export default data_product;\n')

if __name__ == '__main__':
    # Specify the directory containing your images
    image_directory = '/Users/suryatopsasmal/Project/stylestitch/src/Component/style_stitch/summer/upper'
    image_formats = ('.png',)

    # Gather all relevant images in the range 6(1).png to 6(10).png
    images = []
    for i in range(1, 11):  # Loop through numbers 1 to 10
        img_name = f'6 ({i}).png'
        img_path = os.path.join(image_directory, img_name)
        if os.path.exists(img_path):
            images.append(img_path)

    if images:
        # Randomly select an image from the gathered images
        image_path = random.choice(images)
        print(f"Selected image for processing: {image_path}")
        
        recommendations = process_image(image_path)
        print(f"Recommendations for {image_path}: {recommendations}")

        # Save recommendations to a JS file
        save_recommendations_to_js(recommendations)
        print(f"Recommendations saved to 'recommended_images.js'")
    else:
        print(f"No valid images found in {image_directory}.")
