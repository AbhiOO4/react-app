import React from 'react'; 
import Navbar from './components/Navbar';
import Workout from './components/Workout';
import Calorie from './components/Calorie';

export default function App() {
  return (
    <div >
      <Navbar />
      <Workout />
      <Calorie />
    </div>
  );
};


