import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [strength, setStrength] = useState('');
  

  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  
  const generatePassword = () => {
    if (length < 1 || length > 25) {
      setError('Password length must be between 1 and 25');
      return;
    } else {
      setError('');
    }

    let characters = lowerCaseChars + upperCaseChars + numberChars;

    if (includeSpecial) {
      characters += specialChars;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
    setStrength(checkPasswordStrength(newPassword)); // Update strength right after generating password
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  const checkPasswordStrength = (password) => {
    let strength = '';
    if (password.length < 8) {
      strength = 'Weak';
    } else if (password.length >= 8 && password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      strength = 'Medium';
    } else if (password.length >= 12 && password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      strength = 'Strong';
    }
    return strength;
  };

  return (
    <div className="App">
      <div className="generator-container">
        
        <h2>Random Password Generator</h2>

        <label>Password Length (Max: 25): </label>
        <input 
          type="number" 
          value={length} 
          min="1" 
          max="25" 
          onChange={(e) => setLength(e.target.value)}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="option">
          <input 
            type="checkbox" 
            checked={includeSpecial} 
            onChange={() => setIncludeSpecial(!includeSpecial)}
          />
          <label>Include Special Characters</label>
        </div>

        <button className="btn" onClick={generatePassword}>Generate Password</button>

        <input 
          type={showPassword ? "text" : "password"} 
          value={password} 
          readOnly 
          className="password-output" 
        />

        <div className="option">
          <input 
            type="checkbox" 
            onChange={() => setShowPassword(!showPassword)} 
          /> Show Password
        </div>

        <button className="btn" onClick={copyToClipboard}>Copy Password</button>

        <p>Password Strength: {strength}</p>
      </div>
    </div>
  );
}

export default App;
