import image1 from '../assets/image/4.jpg'
import Image from "next/image";
import ServiceBox from "./ServiceBox";

function Service() {
  return (
    <div
      className="w-full h-auto grid justify-items-center pt-[100px]"
      id="services"
    >
      <h1 className=" px-[100px] py-[10px] rounded-[10px] text-4xl font-semibold
      bg-[#fff] text-[000]">Our Secvices</h1>
      <div className="w-full h-auto flex flex-wrap justify-center gap-y-10 gap-x-10 px-16 py-8 lg:px-16 lg:py-20">

      <ServiceBox>
        <Image src={image1} alt="food" width="300" height="200" />
        <h2>Service Name</h2>
        <p>
          Service short details: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="text-white">Price $100</h4>
      </ServiceBox>

      <ServiceBox>
        <Image src={image1} alt="food" width="300" height="200" />
        <h2>Service Name</h2>
        <p>
          Service short details: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="text-white">Price $100</h4>
      </ServiceBox>

      <ServiceBox>
        <Image src={image1} alt="food" width="300" height="200" />
        <h2>Service Name</h2>
        <p>
          Service short details: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="text-white">Price $100</h4>
      </ServiceBox>

      <ServiceBox>
        <Image src={image1} alt="food" width="300" height="200" />
        <h2>Service Name</h2>
        <p>
          Service short details: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="text-white">Price $100</h4>
      </ServiceBox>

      <ServiceBox>
        <Image src={image1} alt="food" width="300" height="200" />
        <h2>Service Name</h2>
        <p>
          Service short details: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="text-white">Price $100</h4>
      </ServiceBox>

      <ServiceBox>
        <Image src={image1} alt="food" width="300" height="200" />
        <h2>Service Name</h2>
        <p>
          Service short details: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <h4 className="text-white">Price $100</h4>
      </ServiceBox>
      </div>
    </div>
  );
}

export default Service;
