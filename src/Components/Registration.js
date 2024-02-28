// // Import necessary React components and styles
// import React, { useState } from 'react';
// import './Registration.css';

// // RegistrationPage component
// const RegistrationPage = () => {
//   // State variables for form data
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [gender, setGender] = useState('male');
//   const [country, setCountry] = useState('usa');
//   const [subscribe, setSubscribe] = useState(false);

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform actions on form submission (e.g., API call, validation, etc.)
//     console.log('Form submitted:', { username, email, gender, country, subscribe });
//   };

//   return (
//     <div className="registration-container">
//       <h1>Registration Page</h1>
//       <form onSubmit={handleSubmit}>
        
//         {/* Input fields */}
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>

//         {/* Radio buttons */}
//         <div className="radio-group">
//           <label>
//             Male
//             <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
//           </label>
//           <label>
//             Female
//             <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
//           </label>
//         </div>

//         {/* Dropdown */}
//         <label>
//           Country:
//           <select value={country} onChange={(e) => setCountry(e.target.value)}>
//             <option value="usa">USA</option>
//             <option value="canada">Canada</option>
//             <option value="uk">UK</option>
//           </select>
//         </label>

//         {/* Switch */}
//         <label className="switch-label">
//           Subscribe:
//           <input type="checkbox" checked={subscribe} onChange={() => setSubscribe(!subscribe)} />
//         </label>

//         {/* Textbox */}
//         <label>
//           Additional Information:
//           <textarea value={''} onChange={() => {}} />
//         </label>

//         {/* Image */}
//         <img src="https://placekitten.com/200/200" alt="Random Kitten" />

//         {/* Hyperlink */}
//         <a href="https://www.example.com">Visit Example</a>

//         {/* Button */}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;

// import React from 'react';
// // import './style.css'; // Make sure to import your CSS file
// import './Registration.css';

// const Registration = () => {
//   return (
//     <div className="container">
//       <h2>Registration</h2>
//       <div className="form-container">
//         <form>
//         <div class="input-name">
//                     <i class="fa fa-user lock"></i>
//                     <input type="text" placeholder="First Name" class="name" /> 
//                     <span>
//                         <i class="fa fa-user lock"></i>
//                         <input type="text" placeholder="Last Name" class="name" />
//                     </span>
//                 </div>

//                 <div class="input-name">
//                     <i class="fa fa-envelope email"></i>
//                     <input type="email" placeholder="Email" required class="text-name" /> 
//                 </div>

//                 <div class="input-name">
//                     <i class="fa fa-lock lock"></i>
//                     <input type="password" placeholder="Password" required class="text-name" /> 
//                 </div>

//                 <div class="input-name">
//                     <i class="fa fa-lock lock"></i>
//                     <input type="password" placeholder="Confirm Password" class="text-name" /> 
//                 </div>

//                 <div class="input-name">   
//                     <input type="radio" name="gender" class="radio-button" />
//                     <label>Male</label> 
//                     <input type="radio" name="gender" class="radio-button" />
//                     <label>Female</label> 
//                 </div>

//                 <div class="input-name">   
//                     <select class="country" required>
//                         <option>Select a country</option>
//                         <option>India</option>
//                         <option>United States</option>
//                         <option>Japan</option>
//                         <option>Italy</option>
//                         <option>Canada</option>
//                     </select>
                    
//                 </div>

//                 <div class="input-name">
//                     <i class="fas fa-comment"></i>
//                     <textarea id="comment" name="comment" placeholder="Comments" class="text-name"></textarea>
//                 </div>

//                 <div class="input-name">   
//                     <input type="checkbox" class="check-button" />
//                     <label>I agree to the terms and conditions.</label>
//                 </div>

//                 <div class="input-name">   
//                     <input type="submit" value="Register" class="button" />   
//                 </div>
                
//         </form>
//         </div>
//     </div>
//   );
// };

// export default Registration;

// import React from 'react';
// import './Registration.css'; // Make sure to import your CSS file

// const RegistrationForm = () => {
//   return (
//     <div className="container">
//       <h2>Registration Form</h2>
//       <div className="form-container">
//         <form>
//           <div className="input-name">
//             <i className="fa fa-user lock"></i>
//             <input type="text" placeholder="First Name" className="name" />
//             <span>
//               <i className="fa fa-user lock"></i>
//               <input type="text" placeholder="Last Name" className="name" />
//             </span>
//           </div>

//           <div className="input-name">
//             <i className="fa fa-envelope email"></i>
//             <input type="email" placeholder="Email" required className="text-name" />
//           </div>

//           <div className="input-name">
//             <i className="fa fa-lock lock"></i>
//             <input type="password" placeholder="Password" required className="text-name" />
//           </div>

//           <div className="input-name">
//             <i className="fa fa-lock lock"></i>
//             <input type="password" placeholder="Confirm Password" className="text-name" />
//           </div>

//           <div className="input-name">
//             <input type="radio" name="gender" id="male" className="radio-button" />
//             <label htmlFor="male">Male</label>
//             <input type="radio" name="gender" id="female" className="radio-button" />
//             <label htmlFor="female">Female</label>
//           </div>

//           <div className="input-name">
//             <select className="country" required>
//               <option>Select a country</option>
//               <option>India</option>
//               <option>United States</option>
//               <option>Japan</option>
//               <option>Italy</option>
//               <option>Canada</option>
//             </select>
//           </div>

//           <div className="input-name">
//             <i className="fas fa-comment"></i>
//             <textarea id="comment" name="comment" placeholder="Comments" className="text-name"></textarea>
//           </div>

//           <div className="video-container">
//             <video controls>
//               <source src="video.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           <div className="input-name">
//             <input type="checkbox" id="terms" className="check-button" />
//             <label htmlFor="terms">I agree to the terms and conditions.</label>
//           </div>

//           <div className="input-name">
//             <input type="submit" value="Register" className="button" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
import './Registration.css'; // Make sure to import your CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: 'Select a country',
    comments: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option disabled>Select a country</option>
            <option>India</option>
            <option>United States</option>
            <option>Japan</option>
            <option>Italy</option>
            <option>Canada</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Write your comments here..."
          ></textarea>
        </div>

        <div className="form-group">
          {/* <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            I agree to the terms and conditions.
          </label> */}
           <label>
    <input
      type="checkbox"
      name="agreeTerms"
      checked={formData.agreeTerms}
      onChange={handleChange}
    />
    <span>I agree to the terms and conditions.</span>
  </label>
        </div>

        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
