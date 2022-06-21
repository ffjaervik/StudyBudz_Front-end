import { useState, useEffect } from 'react';
import './App.css';
import Form from '../Form/index';

function App() {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8000/Lesson`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const LessonData = await response.json();

        setInitialData(LessonData);
        console.log(LessonData);
        console.log(initialData);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
      {initialData && <h2>{initialData[0].fullName} </h2>}
      {/* {initialData && <h2>{initialData[2].fullName} </h2>} */}
      <Form />
    </div>
  );
}

export default App;
