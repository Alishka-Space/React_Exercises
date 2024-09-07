import React, { useState, useEffect } from 'react';

function App() {
  const [person, setPerson] = useState(null);

  // Function to fetch random person data
  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const { name, email } = data.results[0];
      setPerson({
        firstName: name.first,
        lastName: name.last,
        email: email,
      });
    } catch (error) {
      console.error('Error fetching person data:', error);
    }
  };

  // Fetch person data once on component mount
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <h1>Random Person Generator</h1>
      {person ? (
        <ul>
          <li>First Name: {person.firstName}</li>
          <li>Last Name: {person.lastName}</li>
          <li>Email: {person.email}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={getPerson}>Generate New Person</button>
    </div>
  );
}

export default App;