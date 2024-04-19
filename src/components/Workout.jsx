import React from "react";
import davidlaid from "./images/davidlaid.svg";
import { Link } from "react-router-dom";
import bodybuilder from "./images/bodybuilder.svg"

const Workout = () => {
    return (
        <div className="text-black bg-amber-400/70 pb-40 pt-16 relative hover:bg-amber-400/80" style={{backgroundImage: `url(${bodybuilder})`}}>
            <div className="pl-5 pt-10 max-w-3xl">
                <h1 className="text-5xl font-bold pb-2">Personalised Workout Routine</h1>
                <p className="pb-5">Get yourself a personalized workout routine with the exercises ,
                no of sets and the rep ranges you must perform in order to reach 
                your set goal.</p>
                <Link className="bg-cyan-950 hover:bg-cyan-500 hover:px-9 hover:py-2 rounded-3xl px-8 py-1 text-white font-medium" to="/Personalised-workout-routine">Create</Link>
                <img src={davidlaid} alt="david" className="w-fit absolute right-20 bottom-0 hidden md:block" />
            </div>
       </div>
    );
};

export default Workout