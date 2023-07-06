import { FaHandHoldingHeart, FaHandshake, FaList } from "react-icons/fa";
import Box from "../components/Box";

function AboutUs() {
  return (
    <div className="w-full h-auto mt-[100px]" id="aboutMe">
      <div className=" w-full mx-[10px] h-[280px] mb-[20px] rounded-[10px] bg-[#000] grid justify-items-center 
      lg:h-[380px] lg:mx-[50px] lg:mb-0 lg:bg-[#2d2e2d] lg:w-auto">
        <h1
          className="px-[100px] py-[10px] rounded-[10px] text-4xl font-semibold 
         mt-[90px] bg-[#fff] text-[#000]
          lg:px-[100px] lg:bg-black lg:text-white lg:absolute"
        >
          About Us
        </h1>
      </div>
      <div className="w-full h-auto bg-black flex justify-center">
        <div
          className="w-[90%] h-auto bg-transparent flex flex-wrap justify-center 
        gap-5 gap-y-5 gap-x-5 mb-20 lg:mt-[-150px] lg:mb-[120px]"
        >
          <Box className="bg-[#2d2e2d] hover:bg-[#444644]">
            <div>
              <FaHandshake className="text-[50px] text-[#000] bg-white p-2.5 rounded-[100%]" />
            </div>
            <h2 className=" text-2xl">Finance</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className="bg-[#2d2e2d] hover:bg-[#444644]">
            <div>
              <FaList className="text-[50px] text-[#000] bg-white p-2.5 rounded-[100%]" />
            </div>
            <h2 className=" text-2xl">Web Design</h2>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box className="bg-[#2d2e2d] hover:bg-[#444644]">
            <div>
              <FaHandHoldingHeart className="text-[50px] text-[#000] bg-white p-2.5 rounded-[100%]" />
            </div>
            <h2 className=" text-2xl">Consulting</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
