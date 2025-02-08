"use client";

import { Event } from "../components/EventCard";
import { useAppContext } from "@/shared/context/AppContext";
import {
  Carousel,
  Button,
  Modal,
  Textarea,
  Select,
  TextInput,
  Label,
  FileInput,
} from "flowbite-react";
import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import image1 from "@/shared/assets/media/artTribe.png";
import image2 from "@/shared/assets/media/concert.jpg";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function EventsPage() {
  const [events, setEvents] = useState([
    {
      title: "Art Exhibition",
      type: "Public",
      date: "02/10/2025",
      time: "12:00",
      location: "Art Gallery",
      maxAttend: 100,
      description: "An exhibition of art.",
      image: image1,
    },
    {
      title: "Music Concert",
      type: "Public",
      date: "02/20/2025",
      time: "12:00",
      location: "Music Hall",
      maxAttend: 100,
      description: "A concert of music.",
      image: image2,
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newMaxAttend, setNewMaxAttend] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("https://via.placeholder.com/150");

  const handleAddEvent = () => {
    if (newTitle.trim() !== "") {
      setEvents([
        ...events,
        {
          title: newTitle,
          type: newType,
          date: newDate,
          time: newTime,
          location: newLocation,
          maxAttend: newMaxAttend,
          description: newDescription,
          image: newImage,
        },
      ]);
      setNewTitle("");
      setNewType("");
      setNewDate("");
      setNewTime("");
      setNewLocation("");
      setNewMaxAttend(0);
      setNewDescription("");
      setNewImage("");
      setOpenModal(false);
    }
  };

  const { openSearch, setOpenSearch } = useAppContext();
  const { openModal, setOpenModal } = useAppContext();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filePath = URL.createObjectURL(file);
      setNewImage(filePath);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex-inline fixed z-20 flex h-20 w-full items-center justify-between rounded-b-[40px] bg-[#3224f2] px-10 sm:h-36">
        <h1 className="text-xl font-bold text-slate-100 underline decoration-wavy sm:text-4xl">
          What's On
        </h1>
        <div className="flex items-center space-x-5 font-bold sm:space-x-7">
          {openSearch && (
            <form>
              <div className="relative w-72">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <SlMagnifier className="size-6 text-indigo-400" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block h-14 w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900"
                  placeholder="Search"
                  required
                />
                <Button
                  gradientMonochrome="lime"
                  type="submit"
                  className="py-0.25 absolute bottom-2.5 end-2.5 px-2 text-sm font-medium"
                  pill
                >
                  Search
                </Button>
              </div>
            </form>
          )}
          <Button
            gradientMonochrome="lime"
            className="py-1.0 px-0.5 sm:px-1.5"
            pill
          >
            <SlMagnifier
              className="size-3 text-[#3224f2] sm:size-6"
              onClick={() => setOpenSearch(!openSearch)}
            />
          </Button>
          <Button
            gradientMonochrome="lime"
            className="py-1.0 px-0.5 sm:px-1.5"
            pill
          >
            <FiPlus
              className="size-3 text-[#3224f2] sm:size-6"
              onClick={() => setOpenModal(true)}
            />
          </Button>
        </div>
      </div>

      <Modal show={openModal} onClose={() => closeModal()} popup>
        <Modal.Header>
          <p className="m-2 w-full text-center font-satoshi-bold text-2xl text-indigo-600">
            Create Event
          </p>
        </Modal.Header>
        <Modal.Body>
          <Label htmlFor="event-name" value="Event Name" />
          <TextInput
            id="event-name"
            placeholder="Event Name"
            onChange={(e) => setNewTitle(e.target.value)}
            className="mb-4"
            required
          />

          <Label htmlFor="event-type" value="Event Type" />
          <Select
            id="event-type"
            className="mb-4"
            onChange={(e) => setNewType(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </Select>

          <Label htmlFor="event-date" value="Event Date" />
          <TextInput
            type="date"
            id="event-date"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              setNewDate(e.target.value);
            }}
            className="mb-4"
            required
          />

          <Label htmlFor="event-time" value="Event Time" />
          <TextInput
            id="event-time"
            type="time"
            onChange={(e) => setNewTime(e.target.value)}
            className="mb-4"
            required
          />

          <Label htmlFor="event-location" value="Event Location" />
          <TextInput
            id="event-location"
            placeholder="Event Location"
            onChange={(e) => setNewLocation(e.target.value)}
            className="mb-4"
            required
          />

          <Label htmlFor="max-attend" value="Maximum Attendance" />
          <TextInput
            id="max-attend"
            type="number"
            onChange={(e) => setNewMaxAttend(parseInt(e.target.value))}
            className="mb-4 w-20"
          />

          <Label htmlFor="event-description" value="Event Description" />
          <Textarea
            id="event-description"
            placeholder="Event Description"
            rows={5}
            onChange={(e) => setNewDescription(e.target.value)}
            className="mb-4"
          />

          <Label htmlFor="event-image" value="Event Image" />
          <FileInput
            accept="image/*"
            id="event-image"
            onChange={handleFileChange}
            className="mb-4"
            multiple
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="bg-[#3224f2] text-[#cbfd80] sm:size-auto sm:py-1.5"
            size="md"
            onClick={handleAddEvent}
            disabled={
              newTitle.trim() === "" ||
              newType.trim() === "" ||
              newDate.trim() === "" ||
              newTime.trim() === "" ||
              newLocation.trim() === ""
            }
            pill
          >
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="relative mx-auto py-44 lg:px-20 xl:px-52">
        <p className="font-satoshi-bold text-2xl text-black">Your events</p>
        <Carousel
          leftControl={<FaCircleArrowLeft className="size-10" />}
          rightControl={<FaCircleArrowRight className="size-10" />}
        >
          {events.map((event, index) => (
            <Event
              key={index}
              title={event.title}
              type={event.type}
              date={event.date}
              time={event.time}
              location={event.location}
              maxAttend={event.maxAttend}
              desc={event.description}
              image={event.image}
            />
          ))}
        </Carousel>
      </div>

      <div className="relative mx-auto pb-44 lg:px-20 xl:px-52">
        <p className="font-satoshi-bold text-2xl text-black">Explore events</p>
        {/*Under construction for recommendation*/}
      </div>
    </div>
  );
}
