import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [serverIP, setServerIP] = useState('');

  useEffect(() => {
    // Fetch the public IP address from an external API
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setServerIP(data.ip))
      .catch((error) => console.error('Error fetching IP:', error));
  }, []);

  return (
    <>
      <h2>Hosted on Server 1</h2>
      <h4>Server IP: {serverIP || 'Loading...'}</h4>
    </>
  );
}

export default App;
