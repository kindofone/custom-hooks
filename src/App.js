import logo from './logo.svg';
import './App.css';
import useScreenSize from './useScreenSize.js';
import useCommentsFetcher from './useCommentsFetcher.js';
import { useState, useRef } from 'react';

function App() {
  const [emailError, setEmailError] = useState("");
  const emailInput = useRef(null);
  const isSmallScreen = useScreenSize();
  const comments = useCommentsFetcher(1);

  const validateEmail = (email) => {
    return email.includes('@');
  }

  const formSubmit = () => {
    if (!validateEmail(emailInput.current.value)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    console.log('Form sent with email: ', emailInput.current.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isSmallScreen ? "Small Screen" : "Big Screen"}
        </p>
        <ul>
          {comments.map(comment => {
            return <li key={comment.id}>{comment.body}</li>;
          })}
        </ul>
        
        <input ref={emailInput} type="text" placeholder="email" onChange={() => setEmailError("")}></input>
        <label>{emailError}</label>
        <button onClick={formSubmit} value="Send">Send</button>

      </header>
    </div>
  );
}

export default App;
