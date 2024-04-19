import React from 'react'; 
import Navbar from '../components/Navbar';
import bodybuilder2 from '../components/images/bodybuilder2.svg';

export default function Pwr() {
  return (
    <div >
      <Navbar />
      <div className='p-4 bg-slate-200 ' style={{backgroundImage: `url(${bodybuilder2})`}}>
        <h1 className='font-bold px-5 py-2'>ENTER THE FOLLOWING DETAILS  : </h1>
        <form className='p-3 font-semibold mb-96'>
        <table >
            <tr >
                <td className='p-3'>No of days per week</td>
            </tr>
            <tr>
                <td>
                <select className='w-80 rounded-lg pl-2'>
                   <option value='3'>3</option>
                   <option value='4'>4</option>
                   <option value='5'>5</option>
                   <option value='6'>6</option>
                   <option value='7'>7</option>
                   <option selected>Select days</option>
                </select>
                </td>
            </tr>
            <tr></tr>
            <tr >
                <td className='p-3'>Target muscle groups</td>
            </tr>
            <tr>
                <td>
                <select className='w-80 rounded-lg pl-2'>
                   <option value='1'>chest, back, shoudlers, arms and legs</option>
                   <option value='2'>chest, back, shoulders, arms, abs and legs</option>
                   <option selected>Select target muscles</option>
                </select>
                </td>
            </tr>
            <tr></tr>
            <tr >
                <td className='p-3'>Focus area</td>
            </tr>
            <tr>
                <td>
                <select className='w-80 rounded-lg pl-2'>
                   <option value='1'>Arms</option>
                   <option value='2'>Chest</option>
                   <option value='3'>shoudlers</option>
                   <option value='4'>back</option>
                   <option value='5'>legs</option>
                   <option selected>Select focus area</option>
                </select>
                </td>
            </tr>
            <tr></tr>
            <tr >
                <td className='pt-5 '><input type="submit" value="Create" className="bg-cyan-950 hover:bg-cyan-500 hover:px-9 hover:py-2 rounded-3xl px-8 py-1 text-white font-medium"/></td>
            </tr>
        </table>
        </form>
      </div>
    </div>
  );
};
