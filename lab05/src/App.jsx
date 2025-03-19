import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setArray(data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <span>Danh sách</span>
      <ul>
        {array.map((item) => (
          <li key={item.id}>
            {item.title} <br />
            <span> Url: {item.url}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
