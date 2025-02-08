"use client";

import { TribeHeader } from "@/features/home/tribes/components/TribeHeader";
import {
  Modal,
  Textarea,
  FileInput,
  Button,
  TextInput,
  Label,
  Select,
} from "flowbite-react";
import { useAppContext } from "@/shared/context/AppContext";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import Product from "../components/ProductCard";
import image1 from "@/shared/assets/media/bedroom.jpeg";
import image2 from "@/shared/assets/media/lamp.jpg";

export default function UnibazaarPage() {
  const [products, setProducts] = useState([
    {
      title: "House",
      description: "This is a product",
      image: image1,
      price: 200,
      unit: "week",
    },
    {
      title: "Lamp",
      description: "This is another product",
      image: image2,
      price: 50,
      unit: "",
    },
  ]);
  const [newSellContent, setNewSellContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [openUnit, setOpenUnit] = useState(false);
  const [newUnit, setNewUnit] = useState("");
  const { openModal, setOpenModal } = useAppContext();

  const handleAddProduct = () => {
    if (newTitle.trim() !== "") {
      setProducts([
        ...products,
        {
          title: newTitle,
          description: newSellContent,
          image: newImage,
          price: newPrice,
          unit: newUnit,
        },
      ]);
      setNewSellContent("");
      setNewTitle("");
      setNewSellContent("");
      setNewUnit("");
      setNewPrice(0);
      setNewImage("https://via.placeholder.com/150");
      setOpenModal(false);
    }
  };

  const closeModal = () => {
    if (newSellContent.trim() !== "") {
      const drafts = JSON.parse(localStorage.getItem("drafts") || "[]");
      drafts.push(newSellContent);
      localStorage.setItem("drafts", JSON.stringify(drafts));
    }
    setOpenModal(false);
  };

  const [newImage, setNewImage] = useState("https://via.placeholder.com/150");
  const [openFile, setOpenFile] = useState(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filePath = URL.createObjectURL(file);
      setNewImage(filePath);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <TribeHeader />
      <Modal show={openModal} size="6xl" onClose={() => closeModal()} popup>
        <FaArrowLeft
          className="absolute start-1 top-1 m-3 size-5 text-indigo-600 hover:text-lime-300"
          onClick={() => setOpenModal(false)}
        />
        <p className="w-full p-5 pb-10 text-center font-satoshi-bold text-2xl text-indigo-600">
          Create Product
        </p>

        <Modal.Body>
          <Label htmlFor="product title" value="Product Title" />
          <TextInput
            id="product title"
            onChange={(e) => setNewTitle(e.target.value)}
            className="mb-5"
            required
          />
          <Label htmlFor="product desc" value="Product Description" />
          <Textarea
            placeholder="Tell other about your product"
            id="product desc"
            value={newSellContent}
            onChange={(e) => setNewSellContent(e.target.value)}
            rows={5}
            className="mb-5"
          />
          <Label htmlFor="product price" value="Product Price" />
          <TextInput
            id="product price"
            type="number"
            onChange={(e) => setNewPrice(parseInt(e.target.value))}
            className="mb-5 w-20"
            required
          />
          {openUnit && (
            <div>
              <Label htmlFor="product unit" value="Product Unit" />
              <Select
                id="product unit"
                onChange={(e) => setNewUnit(e.target.value)}
                className="mb-5 w-20"
              >
                <option value=""></option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="each">Ea</option>
                <option value="kg">Kg</option>
                <option value="l">Litres</option>
              </Select>
            </div>
          )}
          {openFile && (
            <FileInput
              accept="image/*, video/*"
              id="media-upload"
              onChange={handleFileChange}
              className="mb-4 border-indigo-600 bg-indigo-100 text-indigo-600"
              multiple
            />
          )}
          <div className="flex flex-row">
            <div className="flex basis-3/4 flex-wrap items-center gap-4">
              <Button
                className="px-auto h-10 bg-[#3224f2] text-[#cbfd80] sm:size-auto sm:py-1.5"
                onClick={() => setOpenFile(!openFile)}
                size="sm"
                pill
              >
                <IoMdPhotos className="mr-2 size-5" />
                Add Media
              </Button>
              <Button
                className="px-auto h-10 bg-[#3224f2] text-[#cbfd80] sm:size-auto sm:py-1.5"
                onClick={() => setOpenUnit(!openUnit)}
                size="sm"
                pill
              >
                <FaDollarSign className="mr-2 size-5" />
                Add Price Unit
              </Button>
            </div>
            <div className="flex grow justify-end">
              <Button
                gradientMonochrome="lime"
                className="px-auto h-10 sm:h-12 sm:py-1.5"
                onClick={handleAddProduct}
                type="submit"
                pill
                disabled={newTitle.trim() === ""}
              >
                Post
                <FaArrowUp className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="relative grid grid-cols-4 gap-5 px-20 pt-32">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
