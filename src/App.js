import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrganizationStructure from './components/OrganizationStructure';




const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };



  return (
    <>
      <div className="container px-5 mx-auto">
        <h2 className="mt-5">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
          <button className="btn btn-primary mx-5">login</button>
        </form>
      </div>
      <OrganizationStructure />
    </>
  );
};

export default App;
