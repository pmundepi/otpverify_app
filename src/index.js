import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

let res;

function generateOTP() {
  fetch('http://localhost:4200/generateOTP')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      res = data;
      alert(res);
    })
    .catch(error => console.error(error));
}

function verifyOTP() {
  let otp = '';
  codes.forEach((code) => {
    otp += code.value;
  });
  
  if (otp === res){
    alert('OTP verified successfully!');
  } else {
    alert('Invalid OTP!');
  }
  
  codes.forEach((code) => {
    code.value = '';
  });
}

const codes = document.querySelectorAll('.code');
let otp = '';

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      otp += e.key;
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      otp = otp.slice(0, -1);
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
 
export { generateOTP, verifyOTP };