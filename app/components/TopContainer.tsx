import HeroPic from '../assets/image/Hero-pic.jpg'
import Image from 'next/image';

function TopContainer() {
  return (
    <div
      className="w-full h-[100vh] relative grid justify-center"
      id="banner"
    >
      <Image
      className="absolute w-[100%] h-[100%] left-0 top-0"
      src={HeroPic}
      alt='heropic'
      />
      <div className=" absolute justify-self-center grid justify-items-center translate-y-1/2 top-[100px]">
        <h1 className="text-white text-6xl p-4 font-bold">I&apos;m Startup</h1>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p className="uppercase text-white px-8 py-2 bg-blue-500 rounded-[20px] mt-6">Best service for you</p>
      </div>
    </div>
  );
}

export default TopContainer;
