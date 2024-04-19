import React from "react";
import dish from "./images/dish.svg";
import { Link } from "react-router-dom";
import foods from "./images/foods.svg";

const Calorie = () => {
    return (
    <div className="text-white bg-black pb-40 hover:bg-slate-900 relative" style={{backgroundImage: `url(${foods})`}}>
        <div className="pl-5 pt-10 max-w-3xl">
            <h1 className="text-5xl font-bold pb-2 text-white">Calorie Calculater</h1>
            <p className="pb-5 text-white  ">Calculate the amount of calories you must consume every day to help 
              reach your fitness goal in time along with the macro nutrient composition.</p>
            <Link className="bg-cyan-950 hover:bg-cyan-500 hover:px-9 hover:py-2 rounded-3xl px-8 py-1 text-white font-medium" to="/Calculate-calories">Calculate</Link>
            <img src={dish} alt="dish" className="w-fit absolute right-20 bottom-7 hidden md:block" />
        </div>
    </div>
    );
};

export default Calorie