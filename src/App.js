import './App.css';
import { generateOTP, verifyOTP } from './index.js';

function App() {

  return (
    <div>
      <div className='container'>
        <h2>OTP Verify App</h2>
        <p>The code generates a random 6-digit OTP using the generateOTP() function. The user enters the OTP in the input fields and clicks on the “Verify” button. The verifyOTP() function then compares the entered OTP with the generated OTP and displays an alert message accordingly.</p>
        <div className='code-container'>
          <input type="number" className='code' placeholder="0" min="0" max="9" required/>
          <input type="number" className='code' placeholder="0" min="0" max="9" required/>
          <input type="number" className='code' placeholder="0" min="0" max="9" required/>
          <input type="number" className='code' placeholder="0" min="0" max="9" required/>
          <input type="number" className='code' placeholder="0" min="0" max="9" required/>
          <input type="number" className='code' placeholder="0" min="0" max="9" required/>
        </div>
          <button className='button2' type="submit" onClick={generateOTP}>Generate OTP</button>
          <button className='button' type="submit" onClick={verifyOTP} >Verify OTP</button>
      </div>
    </div>
  );
}


export default App;
