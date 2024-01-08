import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BuildIcon from '@mui/icons-material/Build';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { data } from './data';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Content = () => {
    const date =new Date().toDateString();
  return <>
  <div className='flex bg-[#23374F] justify-between'>
        <div className="flex w-1/3">
            <img src="p1.png" alt="" className='m-auto w-16' />
            <div className="flex bg-[#38516e] sm:mx-16 my-2 rounded-xl px-3 text-white">
                <select className='my-3 sm:text-xl bg-transparent'>
                    <option className='text-black' value="a">All</option>
                    <option className='text-black' value="b">op2</option>
                    <option className='text-black' value="c">op3</option>
                    <option className='text-black' value="d">op4</option>
                </select>
                  <input type="text" className="my-3 px-2 w-28 md:w-auto sm:text-xl border-none bg-transparent outline-none" placeholder="Search"/>
                  <SearchIcon className='sm:text-xl my-4'/>
                </div>
        </div>
        <div className="flex text-white">
          <HelpOutlineIcon className='my-5 mx-2'/>
          <NotificationsNoneIcon className='my-5 mx-2'/>
          <img src="p2.png" alt='img' className='m-auto hidden md:inline'/>
        </div>
    </div>   


  <div className='flex'>
    <div className='w-1/5 h-screen bg-gray-100 text-gray-600 text-lg font-semibold'>
        <ul className='space-y-7 py-7'>
            <li className='flex'><GridViewIcon className='mx-7'/><span className='hidden sm:block'>Dashboard</span></li>
            <li className='flex'><CalendarTodayIcon className='mx-7'/><span className='hidden sm:block'> Calander</span></li>
            <li className='flex'><EventNoteIcon className='mx-7'/><span className='hidden sm:block'> Job Registry</span></li>
            <li className='flex'><InterpreterModeIcon className='mx-7'/><span className='hidden sm:block'> Interpreters</span></li>
            <li className='flex'><EditNoteIcon className='mx-7'/><span className='hidden sm:block'> Case Book</span></li>
            <li className='flex'><BuildIcon className='mx-7'/><span className='hidden sm:block'> Preferences</span></li>
            <li className='flex'><MonetizationOnIcon className='mx-7'/><span className='hidden sm:block'> Payments</span></li>
        </ul>
    <div className='border-b-2 border-gray-400 mx-4'></div>

        <ul className='space-y-7 py-14'>
            <li className='flex'><EqualizerIcon className='mx-7'/><span className='hidden sm:block'>Reports</span></li>
            <li className='flex'><SettingsIcon className='mx-7'/><span className='hidden sm:block'>Setting</span></li>
        </ul>
    </div>
    <div className='w-[80%] sm:w-full'>
        <div className='text-center bg-gray-100 m-4 flex justify-between'> 
            <img src="p3.png" className="bg-[#DFF8E5] pr-16 hidden sm:inline" alt="" />
            <div className='py-5'>
            <h1 className='text-sm sm:text-3xl font-semibold   font-mono'>Welcome to Tukwil Municipal Court</h1>
            <h3 className='text-xs sm:text-2xl text-left'>Good Morning</h3>
            </div>
            <img src="p4.png" alt="" className="bg-[#DFF8E5] pr-16 hidden sm:inline"/>
        </div>
        <div className='sm:flex'>
        <div className='sm:w-2/5 m-3'>
        <span className=' bg-gray-100 p-2 font-semibold text-gray-500'>  
            {date}
        </span>
        <div className='bg-gray-100 mt-5 '>
            <h3 className='flex justify-between'>
                <span className=' flex'>
                <img src="p5.png" alt="" className='p-1 w-10 sm:w-20 object-contain rounded-full'  />
                <span className='text-pink-600 text-lg sm:text-3xl sm:mt-5 font-semibold mt-2'>23</span>
                <span className='text-lg sm:text-2xl font-semibold sm:mt-6 mt-2 pl-2'>
                    Checkins
                </span>
                </span>
                <ul className='list-disc text-xs sm:text-lg'>
                    <li className='marker:text-green-500'>15 On-Time</li>
                    <li className='marker:text-red-500'>08 Delayed</li>
                    <li className='marker:text-yellow-500'>02 Yet To</li>
                </ul>
            </h3>
            </div>
            <div className='border-b-4 border-solid '>
            </div>
            {data.map((item)=><>
                <div id={item.id} className='flex justify-between rounded-xl p-2 sm:p-5 my-2 bg-gray-100 '> 
                
                <div className='font-semibold bg-orange-200 px-1 py-3 sm:py-8 sm:px-5 rounded-lg'>
                {item.time}
                </div> 
                <div>
                <div className='font-bold  text-md sm:text-lg mt-5'>
                {item.name}
                </div>
                <div className='font-semibold text-xs sm:text-md text-gray-500'>
                {item.court}
                </div>
                </div>
                <div className='my-auto'>
                <button className='bg-orange-300 font-bold w-full p-1 sm:p-2 m-1 text-xs sm:text-md'>Check-In</button>
                <h1 className='text-pink-400 font-bold text-xs sm:text-md'>
                {item.checkin}
                </h1>
                </div>  
            </div>
            </>
            )}
            
        
        </div>
        <div className='sm:w-3/5'>
            <ul className='flex justify-between m-4 text-sm sm:text-md text-white text-center'>
                <li className='bg-violet-700 w-full p-1 rounded-md sm:py-2 mx-0.5 sm:rounded-full '>Today</li>
                <li className='bg-violet-500 w-full p-1 rounded-md sm:py-2 mx-0.5 sm:rounded-full'>Current Week</li>
                <li className='bg-violet-500 w-full p-1 rounded-md sm:py-2 mx-0.5 sm:rounded-full'>Current Month</li>
                <li className='bg-violet-500 w-full p-1 rounded-md sm:py-2 mx-0.5 sm:rounded-full'>Current Year</li>
                <li className='bg-violet-500 w-full p-1 rounded-md sm:py-2 mx-0.5 sm:rounded-full'>Custom</li>
            </ul>

            <div className='bg-gray-100 mx-5 rounded-2xl p-3 '>
            <h1 className='font-bold sm:text-3xl pb-4'>Action Required</h1>
            <div className='border-b-2 border-solid border-gray-300 mt-1'></div>

            <ul className='list-disc py-2 sm:py-5 px-7  text-xs sm:text-lg font-semibold space-y-3 sm:space-y-11 '>
                <li className='marker:text-violet-700'>5 Jobs are in <span className='text-violet-300'>"Open Status"</span></li>
                <li className='marker:text-red-700'>2 Jobs must be filled in next <span className='text-orange-300'>"24 Hours"</span></li>
                <li className='marker:text-green-700'>4 Jobs are not  filled sinced last <span className='text-yellow-300'>72 Hours</span></li>
                <li className='marker:text-blue-700'>10 Events in this week are scheduled <span className='text-orange-300'>without any job</span></li>
                <li className='marker:text-purple-700'>3 interpreters requested for <span className='text-pink-300'>Job Cancellation</span></li>
                <li className='marker:text-pink-700'>01 <span className='text-orange-300'>Missing Checkout</span> found</li>
                <li className='marker:text-green-700'>06 Jobs needs to be closed as the scheduled <span className='text-green-300'>time is over</span></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    
  </div>

  </>
}

export default Content