"use client";

import Image from "next/image";
import UserPic from "../../assets/img/Mask Group.png";
import { lato } from "@/app/font";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "@/app/globals.css";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const datas = [
    {
      testimoni:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      jobTitle: "CEO, Marketing Guru.",
      icon: UserPic,
    },
    {
      testimoni:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      jobTitle: "CEO, Marketing Guru.",
      icon: UserPic,
    },
    {
      testimoni:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      jobTitle: "CEO, Marketing Guru.",
      icon: UserPic,
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-screen-xl m-auto bg-white justify-between pb-18">
        <div className="max-w-screen-xl flex justify-between ">
          <div className="flex flex-col gap-6">
            <h1 className="text-primary text-xl font-medium uppercase leading-5 ">
              Testimonials
            </h1>
            <h1 className="w-96 text-black text-3xl font-semibold pb-18">
              See what our customer say about us
            </h1>
          </div>
          <div className="flex gap-5 items-start"></div>
        </div>
        <div className="flex gap-11">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={45}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
            {datas.map((item, index) => (
              <SwiperSlide
                key={index}
                className=" p-10 rounded-20 shadow-primary">
                <p
                  className={`${lato.className}font-normal text-lg text-black leading-6`}>
                  {item.testimoni}
                </p>
                <div className="flex">
                  <Image src={item.icon} alt="icon" className="w-3/12" />
                  <div>
                    <h1 className=" text-black  text-xl font-semibold">
                      {item.name}
                    </h1>
                    <p
                      className={` text-black ${lato.className} text-lg font-normal`}>
                      {item.jobTitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
