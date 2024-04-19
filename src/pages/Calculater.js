import React from 'react'; 
import Navbar from '../components/Navbar';
import foods_wall from '../components/images/bg_food.svg';


export default function Calculater() {
  return (
    <div >
      <Navbar />
      <div className='bg-slate-200 py-2 px-5 mb-96' style={{backgroundImage: `url(${foods_wall})`}}>
        <h1 className='font-bold px-4'>CALCULATE YOUR INTAKE CALORIES  : </h1>
        <form className='px-4 py-1 font-semibold '>
        <table >
            <tr >
                <td className='py-3 '>Current weight</td>
            </tr>
            <tr>
                <td><input type='number' name='weight' className=' rounded-lg pl-1 w-48' placeholder='in Kgs'/></td>
            </tr>
            <tr></tr>
            <tr >
                <td className='py-3'>Current height</td>
            </tr>
            <tr>
                <td><input type='number' name='height' className=' rounded-lg pl-1 w-48' placeholder='in CM' /></td>
            </tr>
            <tr></tr>
            <tr >
                <td className='py-3'>Your goal</td>
            </tr>
            <tr>
                <td>
                <select className=' rounded-lg pl-1 w-48'>
                   <option value='1'>Build muscle and bulk</option>
                   <option value='2'>Build muscle and cut</option>
                   <option defaultValue={0} selected>Select Goal</option>
                </select>
                </td>
            </tr>
            <tr></tr>
            <tr >
                <td className='py-3'>Goal weight</td>
            </tr>
            <tr>
                <td><input type='number' name='gweight' className='w-48 rounded-lg pl-1' placeholder='in Kgs' /></td>
            </tr>
            <tr></tr>
            <tr >
                <td className='py-3'>Target date</td>
            </tr>
            <tr>
                <td><input type='date' name='tdate' className='w-48 rounded-lg pl-1'/></td>
            </tr>
            <tr >
                <td className='pt-5'><input type="submit" value="Calculate" className="bg-cyan-950 hover:bg-cyan-500 hover:px-9 hover:py-2 rounded-3xl px-8 py-1 text-white font-medium"/></td>
            </tr>
        </table>
        </form>
       
      </div>
    </div>
  );
};
