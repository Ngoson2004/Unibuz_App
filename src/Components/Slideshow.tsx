"use client";

import { Carousel } from "flowbite-react";
import image1 from "../media/slideshow1.png";
import image2 from "../media/slideshow2.png";
import image3 from "../media/slideshow3.png";
import image4 from "../media/slideshow4.png";

export function Slideshow() {
  return (
    <Carousel indicators={false} leftControl=" " rightControl=" ">
      <img src={image1} alt="..." />
      <img src={image2} alt="..." />
      <img src={image3} alt="..." />
      <img src={image4} alt="..." />
    </Carousel>
  );
}
