// CardFlipContainer.js

import React, { useState } from 'react';
import CardFlip from 'react-card-flip';
import { useForm } from 'react-hook-form';
import './CardFlip.css';
import logo from './assets/logoh.png'; // Import the logo image

const CardFlipContainer = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSignUpSubmit = (data) => {
    console.log('Sign Up Data:', data);
  };

  const handleSignInSubmit = (data) => {
    console.log('Sign In Data:', data);
  };

  return (
    <div className="card-container">
       {/* Add the logo at the top far left */}
       <img src={logo} alt="Logo" className="logo-image" />
      <CardFlip isFlipped={isFlipped}>
        <div className="card" style={{ backgroundColor: '#8f729c4b' }}>
          {/* First side of the card - Sign Up */}
          <div className="card-content">
            <h2 className="flex-display">Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUpSubmit)}>
              <div className="form-group flex-display name-label">
                <label>First Name:</label>
                <input
                  type="text"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && <p className="error">This field is required.</p>}
              </div>
              <div className="form-group flex-display name-label">
                <label>Middle Name:</label>
                <input
                  type="text"
                  {...register('middleName')}
                />
              </div>
              <div className="form-group flex-display name-label">
                <label>Last Name:</label>
                <input
                  type="text"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && <p className="error">This field is required.</p>}
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  {...register('dateOfBirth')}
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select {...register('gender', { required: true })}>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHERS">Others</option>
                  <option value="UNKNOWN">Unknown</option>
                  <option value="NOT SPECIFIED">Not Specified</option>
                </select>
                {errors.gender && <p className="error">This field is required.</p>}
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  {...register('phone')}
                />
              </div>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  {...register('username', { required: true })}
                />
                {errors.username && <p className="error">This field is required.</p>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                />
                {errors.email && <p className="error">This field is required.</p>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  {...register('password', { required: true })}
                />
                {errors.password && <p className="error">This field is required.</p>}
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <button type="button" onClick={handleFlip}>
              Back to Sign In
            </button>
          </div>
        </div>

        {/* Second side of the card - Sign In */}
        <div className="card" style={{ backgroundColor: '#8f729c4b' }}>
          <div className="card-content">
            <h2 className="flex-display">Sign In</h2>
            <form onSubmit={handleSubmit(handleSignInSubmit)}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  {...register('signInUsername', { required: true })}
                />
                {errors.signInUsername && <p className="error">This field is required.</p>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  {...register('signInPassword', { required: true })}
                />
                {errors.signInPassword && <p className="error">This field is required.</p>}
              </div>
              <button type="submit">Sign In</button>
            </form>
            <button type="button" onClick={handleFlip}>
              Back to Sign Up
            </button>
          </div>
        </div>
      </CardFlip>
    </div>
  );
};

export default CardFlipContainer;
