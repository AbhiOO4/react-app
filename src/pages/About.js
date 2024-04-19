import React from 'react'; 
import Navbar from '../components/Navbar';
import gym from "../components/images/gym.svg";

export default function About() {
  return (
    <div >
      <Navbar />
      <div className='py-4 bg-amber-300 max-h-full px-10 relative' style={{backgroundImage: `url(${gym})`}}>
        <p className='font-semibold text-sm text-center md:text-lg'>We aim to provide the best possible workout routines , workouts , calorie intake and macro nutrient composition, all personalized for the users needs ,
             goals and time available for committing to their fitness goals and also provide features for tracking your workouts daily and also shows you the 
             amount of progress you have made in your resistance training journey.</p>
        <h1 className='font-bold bottom-0 mt-20 text-center md:pl-26'>“the best workout routine is the one which you can realistically stick to”</h1>
        <p className='font-semibold mt-96 pt-20 px-5'>Contact : abhinavsree243@gmail.com</p>
      </div>
    </div>
  );
};
