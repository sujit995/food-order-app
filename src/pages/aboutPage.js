import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col align-middle justify-center items-center mt-16">
      <div className="flex">
        <div className="w-1/2">
          <img src="images/about-img.png" alt="" />
        </div>
        <div className="w-1/2">
          <div>
            <h3 className="text-green-700 font-semibold text-[30px]">
              About Us
            </h3>
            <h1 className="text-customBlue font-semibold text-[50px]">
              Why choose us?
            </h1>
          </div>
          <h3 className='text-green-700 font-semibold text-[25px]'>Best food in the country</h3>
          <p className='text-gray-500 font-semibold text-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
            amet, consectetur adip Lorem ipsum dolor sit amet, consectetur
            address_zip Lorem ipsum dolor sit amet, consectetur adip
          </p>
          <div className="mt-5 flex flex-row gap-4">
            <div className="border-2 border-gray-500 px-5 py-5 rounded-lg">
              <i className="fas fa-shipping-fast text-green-700 mr-3"></i>
              <span className='text-gray-500 font-semibold text-[15px]'>Free Delivery</span>
            </div>
            <div className="border-2 border-gray-500 px-5 py-5 rounded-lg">
              <i className="fas fa-dollar-sign text-green-700 mr-3"></i>
              <span className='text-gray-500 font-semibold text-[15px]'>Easy Payment</span>
            </div>
            <div className="border-2 border-gray-500 px-5 py-5 rounded-lg">
              <i className="fas fa-headset text-green-700 mr-3"></i>
              <span className='text-gray-500 font-semibold text-[15px]'>24/7 service</span>
            </div>
          </div>
          <button className='bg-customBlue text-white font-semibold text-[20px] rounded-md px-4 py-2 mt-3'>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
