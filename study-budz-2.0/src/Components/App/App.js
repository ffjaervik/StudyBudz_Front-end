import { useState, useEffect } from 'react';
import './App.css';
import Form from '../Form/index';
// import LessonCard from '../LessonCard';
import LessonContainer from '../LessonContainer';
import Navbar from '../NavBar/index.js';

function App() {
  //Main data that comes from the db + initial render
  const [initialData, setInitialData] = useState(null);

  //Hook that fetches data for the initail render
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;

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
  }, []); //The submit button state will have to go inside the dep. array

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>StudyBudz</h1>
        <div className="main">
          {initialData && <LessonContainer lessons={initialData} />}
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
