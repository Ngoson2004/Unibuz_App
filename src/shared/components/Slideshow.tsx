"use client";

import { Carousel } from "flowbite-react";
import image1 from "@/shared/assets/media/slideshow1.png";
import image2 from "@/shared/assets/media/slideshow2.png";
import image3 from "@/shared/assets/media/slideshow3.png";
import image4 from "@/shared/assets/media/slideshow4.png";

export function Slideshow() {
  return (
    <Carousel className="" indicators={false} leftControl=" " rightControl=" ">
      <img src={image1} alt="..." />
      <img src={image2} alt="..." />
      <img src={image3} alt="..." />
      <img src={image4} alt="..." />
    </Carousel>
  );
}
