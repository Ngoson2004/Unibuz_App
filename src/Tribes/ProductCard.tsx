"use client";

import { Card, Button } from "flowbite-react";
import { FiMessageCircle } from "react-icons/fi";

interface ProdProps {
  title: string;
  description: string;
  image: string;
  price: number;
  unit: string;
}

const Product: React.FC<ProdProps> = ({
  title,
  description,
  image,
  price,
  unit,
}) => {
  return (
    <Card className="my-10 max-h-full w-full">
    <img src={image} alt="Product" className="w-full h-full object-cover" />
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
          {unit && (
            <>
              <br />
              per {unit}
            </>
          )}
        </span>
        <Button
          className="bg-[#3224f2] px-2.5 py-2.5 text-center font-satoshi-md text-[#cbfd80] hover:bg-[#cbfd80] hover:text-[#3224f2]"
          pill
        >
          <FiMessageCircle className="mr-2 h-5 w-5" />
          Message
        </Button>
      </div>
    </Card>
  );
};

export default Product;
