import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import foods_wall from '../components/images/bg_food.svg';

function calculateCalories(weight, height, age, sex, targetWeight, targetDate, activityLevel) {
    // Constants for calorie calculation
    const caloriesPerKgPerDay = 30; // Adjust this according to your needs
    const daysToReachGoal = Math.max(1, Math.ceil((new Date(targetDate) - Date.now()) / (1000 * 60 * 60 * 24))); // Calculate days remaining to reach the goal date

    // Calculate BMR based on weight, height, and age
    let BMR = 0;
    if (sex === '1') { // Male
        BMR = 10 * weight + 6.25 * height - 5 * age + 5; // Harris-Benedict equation for males
    } else { // Female
        BMR = 10 * weight + 6.25 * height - 5 * age - 161; // Harris-Benedict equation for females
    }

    // Adjust BMR based on activity level
    if (activityLevel === '1') { // Highly active
        BMR *= 1.725;
    } else if (activityLevel === '2') { // Moderately active
        BMR *= 1.55;
    } else { // Sedentary
        BMR *= 1.375;
    }
    console.log(daysToReachGoal);
    console.log(targetWeight);
    console.log(weight);
    console.log(BMR);

    let totalCaloriesPerDay;

    // Calculate total calories needed per day to reach the target weight by the target date
    if (targetWeight>weight)
    {
        totalCaloriesPerDay = ((BMR * (targetWeight / weight)) / daysToReachGoal)*10;
    }
    else
    {
        totalCaloriesPerDay = ((BMR * (weight/ targetWeight )) / daysToReachGoal)*10;
    }
    

    return totalCaloriesPerDay;
}

export default function Calculator() {
    const [caloriesPerDay, setCaloriesPerDay] = useState(null);
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const weight = parseFloat(formData.get('weight'));
        const height = parseFloat(formData.get('height'));
        const age = parseFloat(formData.get('age'));
        const sex = formData.get('sex');
        const activityLevel = formData.get('activityLevel');
        const targetWeight = parseFloat(formData.get('gweight'));
        const targetDate = formData.get('tdate');

        const totalCaloriesPerDay = calculateCalories(weight, height, age, sex, targetWeight, targetDate, activityLevel);
        setCaloriesPerDay(totalCaloriesPerDay);
        setShowForm(false);
    };

    return (
        <div>
            <Navbar />
            <div className='bg-slate-200 py-2 px-5 mb-96' style={{ backgroundImage: `url(${foods_wall})` }}>
                <h1 className='font-bold px-4'>CALCULATE YOUR INTAKE CALORIES : </h1>
                {showForm && (
                    <form className='px-4 py-1 font-semibold' onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='py-3'>Current weight</td>
                                    <td><input type='number' name='weight' className=' rounded-lg pl-1 w-48' placeholder='in Kgs' /></td>
                                </tr>
                                <tr>
                                    <td className='py-3'>Current height</td>
                                    <td><input type='number' name='height' className=' rounded-lg pl-1 w-48' placeholder='in CM' /></td>
                                </tr>
                                <tr>
                                    <td className='py-3'>Your Age</td>
                                    <td><input type='number' name='age' className=' rounded-lg pl-1 w-48' placeholder='in CM' /></td>
                                </tr>
                                <tr>
                                    <td className='py-3'>Your Sex</td>
                                    <td>
                                        <select name="sex" className=' rounded-lg pl-1 w-48'>
                                            <option value='1'>Male</option>
                                            <option value='2'>Female</option>
                                            <option defaultValue={0} selected>Select Sex</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-3'>Your Activity level</td>
                                    <td>
                                        <select name="activityLevel" className=' rounded-lg pl-1 w-48'>
                                            <option value='1'>Highly active</option>
                                            <option value='2'>Moderately active</option>
                                            <option value='3'>Sedentary'</option>
                                            <option defaultValue={0} selected>Select activity level</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-3'>Target weight</td>
                                    <td><input type='number' name='gweight' className='w-48 rounded-lg pl-1' placeholder='in Kgs' /></td>
                                </tr>
                                <tr>
                                    <td className='py-3'>Target date</td>
                                    <td><input type='date' name='tdate' className='w-48 rounded-lg pl-1' /></td>
                                </tr>
                                <tr>
                                    <td className='pt-5'><button type="submit" className="bg-cyan-950 hover:bg-cyan-500 hover:px-9 hover:py-2 rounded-3xl px-8 py-1 text-white font-medium">CALCULATE</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                )}

                {caloriesPerDay !== null && !showForm && (
                    <p className="px-4 py-2">Calories per Day: {caloriesPerDay}</p>
                )}
            </div>
        </div>
    );
};
