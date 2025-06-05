import React, { useState, useEffect } from 'react';
import './Hero.css'; // Ensure CSS is properly linked
import f1 from './img/features/f1.png';
import f2 from './img/features/f2.png';
import f3 from './img/features/f3.png';
import f4 from './img/features/f4.png';
import f5 from './img/features/f5.png';
import f6 from './img/features/f6.png';
import p1 from './img/products/f1.jpg';
import p2 from './img/products/f2.jpg';
import p3 from './img/products/f3.jpg';
import p4 from './img/products/f4.jpg';
import p5 from './img/products/f5.jpg';
import p6 from './img/products/f6.jpg';

const Hero = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    // Function to get the user's location
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    // Function to fetch weather data based on location
    const fetchWeatherData = async () => {
      if (location) {
        const apiKey = "a95ea5e3647542abd4530782e99d43d1";
        const { latitude, longitude } = location;
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          if (data) {
            setWeather(data);
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherData();
  }, [location]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageNameChange = (event) => {
    setImageName(event.target.value);
  };

  const handleUpload = async () => {
    if (!selectedImage || !imageName) {
      alert("Please select an image and provide a name.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('name', imageName);

    try {
      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="yellow-box">
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 70% off!</p>
          <button>Generate Your's Choice</button>
          {/* Weather Section */}
          {weather && (
            <div className="weather-info">
              <h3>Current Weather in {weather.name}:</h3>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={f1} alt="Free Shipping" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={f2} alt="Online Order" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={f3} alt="Save Money" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={f4} alt="Promotions" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={f5} alt="Happy Sell" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={f6} alt="Support" />
          <h6>Support</h6>
        </div>
      </section>

      {/* Upload Image Section */}
      <section id="upload" className="section-p1">
        <h2>Upload Your Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="text"
          placeholder="Enter image name"
          value={imageName}
          onChange={handleImageNameChange}
        />
        <button onClick={handleUpload}>Upload</button>
      </section>

      {/* Featured Products Section */}
      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Upcoming Product by StyleStitch</p>
        <div className="pro-container">
          {[p1, p2, p3, p4, p5, p6].map((product, index) => (
            <div className="pro" key={index}>
              <img src={product} alt="Product" />
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <h4>₹{(600 + index * 100)}</h4>
                {/* Cart button removed */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-p1">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {[
            { text: "Great quality products, fast delivery!", name: "John Doe" },
            { text: "Amazing deals, love the discounts!", name: "Jane Smith" },
            { text: "Customer support was very helpful.", name: "Mark Wilson" },
          ].map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.text}"</p>
              <h6>- {testimonial.name}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-p1">
        <h2>Sign Up for Our Newsletter</h2>
        <p>Get the latest updates and offers directly in your inbox.</p>
        <div className="newsletter-signup">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </>
  );
};

export default Hero;