import React, { useState } from 'react';
import CardFlip from 'react-card-flip';
import { useForm } from 'react-hook-form';
import './CardFlip.css';

const CardFlipContainer = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSignInSubmit = (data) => {
    console.log('Sign In Data:', data);
  };

  const handleSignUpSubmit = (data) => {
    console.log('Sign Up Data:', data);
  };

  return (
    <div className="card-container">
      <CardFlip isFlipped={isFlipped}>
        <div className="card" style={{ backgroundColor: '#0d47a1' }}>
          {/* First side of the card */}
          <div className="card-content">
            <h2 style={{ fontFamily: 'sans-serif', fontSize: '24px', color: '#fff' }}>Sign In</h2>
            <form onSubmit={handleSubmit(handleSignInSubmit)}>
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
              <button type="submit">Sign In</button>
            </form>
            <button type="button" onClick={handleFlip}>
              Back to Sign Up
            </button>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#0d47a1' }}>
          {/* Second side of the card */}
          <div className="card-content">
            <h2 style={{ fontFamily: 'sans-serif', fontSize: '24px', color: '#fff' }}>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUpSubmit)}>
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
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  {...register('username', { required: true })}
                />
                {errors.username && <p className="error">This field is required.</p>}
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <button type="button" onClick={handleFlip}>
              Back to Sign In
            </button>
          </div>
        </div>
      </CardFlip>
    </div>
  );
};

export default CardFlipContainer;
