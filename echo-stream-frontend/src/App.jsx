import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null); 

  const socketRef = useRef(null);


  async function startMicrophone() {
    try{

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log(stream);

      setIsRecording(true);

      const recorder = new MediaRecorder(stream);

      mediaRecorderRef.current = recorder
      recorder.ondataavailable = async (event) => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
          socketRef.current.send(event.data);
        } else {
          // Add this part to catch errors!
          console.error("Socket not open! State:", socketRef.current ? socketRef.current.readyState : "Null");
        }
        console.log("Audio chunk", event.data.size);
      }


      recorder.start(500);
    } catch (err) {
      console.error("Error accessing mic:", err);
    }
  }
  function handleConnect() {
    const socket = new WebSocket('ws://127.0.0.1:8000/ws');
    socketRef.current = socket;
    socket.onopen = () => {
      console.log('Connected to server')
      // socket.send('Hello Python')
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