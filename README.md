# StyleStitch
StyleStitch is a web application that utilizes Convolutional Neural Networks (CNN) for fashion image recommendations. The application allows users to upload images of their clothing items and receive similar product suggestions based on deep learning algorithms.
</br>

# procedure : 
</br>
Image Upload: Users can upload their clothing images.</br>
CNN-Based Recommendations: Leveraging CNNs to find similar clothing items.</br>
Dynamic UI: Built with React for a responsive user experience.</br>
Weather-Based Suggestions: Get clothing recommendations based on current weather conditions.</br>
Technologies</br>
Frontend: React, JSX, HTML, CSS</br>
Backend: Flask (for image processing and recommendation logic)</br>
Machine Learning: TensorFlow/Keras for CNN model training and inference</br>
Database: JSON for storing user and product data</br>
Others: Docker for containerization, Git for version control</br>
Installation</br>
Clone the repository: https://github.com/suryatop/stylestitch.git</br>

<pre>
cd src
npm install
Set up the Python backend:

Create a virtual environment:

python -m venv .venv
Activate the virtual environment:
On macOS/Linux:

source .venv/bin/activate
On Windows:

.venv\Scripts\activate
Install required Python packages:

pip install -r requirements.txt
Set up your MySQL database and update the connection details in the backend code.

Usage
Start the Flask backend:

python app.py
Start the React application:

npm start
Open your browser and navigate to http://localhost:3000 to access the application.
</pre>
Upload an image of your clothing item and receive recommendations!

<pre>
  Directory Structure
stylestitch/
├── src/
│   ├── Component/
│   │   ├── Assets/
│   │   ├── Items/
│   │   └── ...
│   ├── Pages/
│   ├── Context/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .venv/
├── requirements.txt
└── README.md# suryatop-StyleStitch-Cloth-Recommendation-Application-
</pre>

