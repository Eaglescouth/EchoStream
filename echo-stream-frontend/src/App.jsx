import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null); 
  async function startMicrophone() {
    try{

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log(stream);

      setIsRecording(true);
      


    }


    catch (err) {
      console.error("Error accessing mic:", err);
    }
  }
  
  function handleConnect() {
    const socket = new WebSocket('ws://127.0.0.1:8000/ws');
    socket.onopen = () => {
      console.log('Connected to server')
      socket.send('Hello Python')
    }

    socket.onmessage = (event) => {
      console.log(event.data)
    }
  }

  return (
    <div>
      <button onClick={handleConnect}>
        Test Connection
      </button>
      <button onClick={startMicrophone}>
        Start Recording
      </button>

    </div>
  );
}

export default App;