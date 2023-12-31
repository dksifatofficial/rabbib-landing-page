import Image from "next/image";
import { FaHandHoldingHeart, FaHandshake, FaList } from "react-icons/fa";
import image from "../assets/image/bubbles_02.jpg";
import Box from "./Box";
import Header from "./Header";

function AboutUs() {
  return (
    <div className="w-full h-auto mt-[100px]" id="aboutMe">
      <div
        className=" relative mx-[71px] h-auto rounded-[10px] bg-[#fff] flex justify-center 
       lg:h-[380px] lg:bg-transparent"
      >
        <Image
          className="absolute w-[100%] h-[100%] left-0 top-0 overflow-hidden rounded-[10px]"
          src={image}
          alt="heropic"
        />
        <Header className=" mb-[30px] ">
          <h2 className="lg:hidden">About Us</h2>
        </Header>
        <h1
          className=" hidden absolute px-[100px] py-[10px] rounded-[10px] text-4xl font-semibold 
         mt-[90px] bg-[#000] text-[#fff] lg:block"
        >
          About Us
        </h1>
      </div>
      <div className="w-full h-auto bg-[#000] flex justify-center">
        <div
          className="w-full h-auto bg-transparent flex flex-wrap justify-center
         gap-y-5 gap-x-5 mb-20 px-[20px]
        lg:mt-[-150px] lg:mb-[120px] lg:w-[90%]"
        >
          <Box>
            <div>
              <FaHandshake className="text-[50px] text-[#fff] bg-[#000] p-2.5 rounded-[100%]" />
            </div>
            <h2 className=" text-2xl">Finance</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box>
            <div>
              <FaList className="text-[50px] text-[#fff] bg-[#000] p-2.5 rounded-[100%]" />
            </div>
            <h2 className=" text-2xl">Web Design</h2>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              quas illo soluta labore tempora sequi. Quisquam ducimus placeat
              minus necessitatibus porro perferendis numquam dolorem totam ab
              odio, illo animi! Voluptate.
            </p>
          </Box>

          <Box>
            <div>
              <FaHandHoldingHeart className="text-[50px] text-[#fff] bg-[#000] p-2.5 rounded-[100%]" />
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
