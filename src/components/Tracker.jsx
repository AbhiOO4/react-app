import React from "react";
import arnold from "./images/arnold.svg";
import gym from "./images/gym.svg";

const Tracker = () => {
    return (
        <div className="text-black bg-teal-500 pb-40 pt-16 relative hover:bg-teal-400" style={{backgroundImage: `url(${gym})`}}>
            <div className="pl-5 pt-10 max-w-3xl">
                <h1 className="text-5xl font-bold pb-2">Workout Tracker</h1>
                <p className="pb-5">Track your workouts from your personalized workout routine customized 
for your needs and also you get to review your own progress overtime.</p>
                <a href="create.html" className="bg-cyan-950 hover:bg-cyan-500 hover:px-9 hover:py-2 rounded-3xl px-8 py-1 text-white font-medium">Create</a>
                <img src={arnold} alt="arnold" className="w-fit absolute right-20 bottom-0 hidden md:block" />
            </div>
       </div>
    );
};

export default Tracker