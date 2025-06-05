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
</br>
Entity–relationship model:
<img src ="https://github.com/user-attachments/assets/a7339696-1aab-4ac0-96e5-909f1a06aebc">
</br>
</br>
Flow chart:
<img src="https://github.com/user-attachments/assets/1c56cf56-99f5-4605-9101-82b42bf7b3c2">
</br>
</br>
Use Case:
<img src = "https://github.com/user-attachments/assets/2161589b-8a75-4373-a782-5e0f48d1f214">
</br>
</br>
Preview:
<img width="1439" alt="location" src="https://github.com/user-attachments/assets/12905d4d-9d68-4895-8c0b-af5f8279e6e6" />
</br>
</br>
Recommendation_Engine:
<img width="1221" alt="recommendation_engine" src="https://github.com/user-attachments/assets/59ee7919-a3af-4912-bf10-3d439e669d49" />


