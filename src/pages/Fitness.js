import React from 'react'; 
import Navbar from '../components/Navbar';
import Workout from '../components/Workout';
import Tracker from '../components/Tracker';

export default function Ftiness() {
  return (
    <div >
      <Navbar />
      <Workout />
      <Tracker />
    </div>
  );
};
