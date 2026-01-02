import { useState } from 'react';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState("");

  const messageReceiver = async () => {
    try {
      const response = await fetch('http://localhost:8080/backend/get-msg');
      if(!response.ok) {
        throw new Error(`HTTP error : ${response.status}`);
      }
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.log("Error details : ", error);
      setMessage("Failed to fetch message from the backend.");
    } finally {
      setClicked(true);
    }
  };

  return (
    <>
      This is just a sample project to demonstrate connecting your FRONTEND to BACKEND.
      <p>Click the button below to reveal message from your Backend</p>
      {clicked ? 
        <>
          Message from Backend : {message}
          <p>Thank you for bearing with me. Seeya!</p>
        </>
        :
        <>
          <button onClick={() => messageReceiver()}>Click Me!!!</button>
        </>
      }
    </>
  )
}

export default App
