import React from "react";
 import { w3cwebsocket as W3CWebSocket } from "websocket";

 const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {

  React.useEffect(
    () => {
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = (message) => {
        console.log(message);
      };
    }, []
  )
     return null
}

export default App