import React from 'react'
// import HomeCard from '../components/';
import { Link} from 'react-router-dom';


const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row mt-16 mx-auto'>
            <div className="w-1/2">
                <div className='justify-center mx-auto px-[40px] items-center'>
                <h3 className='text-green-700 font-semibold text-[30px]'>Our Special Dish</h3>
                <h6 className='text-customBlue font-semibold text-[50px]'>Fried Chicken</h6>
                <p className='text-gray-500 font-semibold text-[20px]'>Your Favorite Food delivery partner</p>
                <button className='bg-customBlue text-white font-semibold text-[20px] rounded-md px-4 py-2'>Order Now</button>
                </div>
            </div>
            <div className='w-1/2'>
            <img src="images/home-img-2.png" alt="chicken" />
            </div>
        </div>
    )
}

export default Home
