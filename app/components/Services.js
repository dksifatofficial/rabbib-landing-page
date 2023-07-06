"use client";

import Image from "next/image";
import { useState } from "react";
import image1 from "../assets/image/4.jpg";
import Popup from "./Popup";
import { PopupBlog1, PopupBlog2, PopupBlog3 } from "./PopupBlogs";
import ServiceBox from "./ServiceBox";

function Service() {
  const [popups, setPopups] = useState([]);
  const handlePopupToggle = (content) => {
    setPopups([...popups, content]);
  };

  const handleClosePopup = () => {
    setPopups([]);
  };

  return (
    <div
      className="w-full h-auto flex flex-wrap justify-center pt-[100px]"
      id="services"
    >
      <h1
        className=" px-[100px] py-[10px] text-center rounded-[10px] text-4xl font-semibold
      bg-[#fff] text-[000]"
      >
        Our Secvices
      </h1>
      <div className="w-full h-auto flex flex-wrap justify-center gap-y-10 gap-x-10 px-16 py-8 lg:px-16 lg:py-20">
        <ServiceBox onClick={() => handlePopupToggle(<PopupBlog1 />)}>
          <Image src={image1} alt="food" width="300" height="200" />
          <h2>Service Name</h2>
          <p>
            Service short details: Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h4 className="text-white">Price $100</h4>
        </ServiceBox>

        <ServiceBox onClick={() => handlePopupToggle(<PopupBlog2 />)}>
          <Image src={image1} alt="food" width="300" height="200" />
          <h2>Service Name</h2>
          <p>
            Service short details: Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h4 className="text-white">Price $100</h4>
        </ServiceBox>

        <ServiceBox onClick={() => handlePopupToggle(<PopupBlog3 />)}>
          <Image src={image1} alt="food" width="300" height="200" />
          <h2>Service Name</h2>
          <p>
            Service short details: Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h4 className="text-white">Price $100</h4>
        </ServiceBox>

        <ServiceBox onClick={() => handlePopupToggle(<PopupBlog3 />)}>
          <Image src={image1} alt="food" width="300" height="200" />
          <h2>Service Name</h2>
          <p>
            Service short details: Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h4 className="text-white">Price $100</h4>
        </ServiceBox>

        <ServiceBox onClick={() => handlePopupToggle(<PopupBlog3 />)}>
          <Image src={image1} alt="food" width="300" height="200" />
          <h2>Service Name</h2>
          <p>
            Service short details: Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h4 className="text-white">Price $100</h4>
        </ServiceBox>

        <ServiceBox onClick={() => handlePopupToggle(<PopupBlog3 />)}>
          <Image src={image1} alt="food" width="300" height="200" />
          <h2>Service Name</h2>
          <p>
            Service short details: Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h4 className="text-white">Price $100</h4>
        </ServiceBox>

        {popups.map((content, index) => (
          <Popup key={index} handleClose={handleClosePopup} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Service;
