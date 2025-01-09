"use client";
import { TribeHeader } from "../Components/TribeHeader";
import { FiPlus } from "react-icons/fi";
import {
  Avatar,
  Button,
  Card,
  Modal,
  TextInput,
  Textarea,
  Label,
  FileInput,
  Select,
} from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { Tab } from "../Components/Tabs";

export function Tribe() {
  const [tribes, setTribes] = useState([
    {
      id: 1,
      name: "Monash Arts",
      description: "",
      img: "./src/media/artTribe.png",
    },
    {
      id: 2,
      name: "SWeebs",
      description: "Swinburne Anime Club",
      img: "./src/media/animeClub.jpg",
    },
    {
      id: 3,
      name: "Swolburne",
      description: "Swinburne Gym Club",
      img: "./src/media/gymClub.avif",
    },
  ]);

  const { openModal, setOpenModal } = useAppContext(); //useState(false);
  const [newTribe, setNewTribe] = useState({
    name: "",
    type: "",
    category: "",
    description: "",
    img: "",
  });
  const navigate = useNavigate();

  const handleAddTribe = () => {
    if (newTribe.name.trim() !== "") {
      setTribes([...tribes, { ...newTribe, id: tribes.length + 1 }]);
      setNewTribe({
        name: "",
        type: "",
        category: "",
        description: "",
        img: "",
      });
      setOpenModal(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filePath = URL.createObjectURL(file);
      setNewTribe({ ...newTribe, img: filePath });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div>
        <TribeHeader />
        <div className="container mx-auto py-44 lg:px-20 xl:px-52">
          <div className="flex-inline mx-auto mb-10 flex w-10/12 justify-between rounded-xl bg-white px-5 py-5">
            <div className="flex-inline flex items-center gap-5">
              <FiPlus
                className="h-10 w-10 cursor-pointer rounded-full bg-indigo-100 p-1 text-[#3224f2] hover:bg-[#cbfd80] hover:text-green-500"
                onClick={() => setOpenModal(true)}
              />
              <p className="text-lg font-semibold">Create a tribe</p>
            </div>
            <div>
              <Button
                className="bg-indigo-100 px-4 text-lg text-[#3224f2]"
                size="lg"
                pill
                onClick={() => setOpenModal(true)}
              >
                Create
              </Button>
            </div>
          </div>
          <Card className="mx-auto w-10/12">
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 px-10 dark:divide-gray-700">
                {tribes.map((tribe, index) => (
                  <li
                    key={index}
                    className="flex-inline flex cursor-pointer items-center justify-start gap-5 py-4 hover:bg-gray-100"
                    onClick={() => navigate(`/tribes/${tribe.id}`)}
                  >
                    <Avatar img={tribe.img} />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-md font-bold">{tribe.name}</p>
                      {tribe.description && (
                        <p className="text-sm font-light">
                          {tribe.description.split(" ").slice(0, 5).join(" ")}
                          {tribe.description.split(" ").length > 5 && "..."}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
              <p className="w-full text-center text-2xl font-satoshi-bold text-indigo-600">
                Add my tribe
              </p>
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" value="Tribe Name" />
                  <TextInput
                    id="name"
                    type="text"
                    value={newTribe.name}
                    onChange={(e) =>
                      setNewTribe({ ...newTribe, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="type" value="Tribe Type" />
                  <Select
                    id="type"
                    value={newTribe.type}
                    onChange={(e) =>
                      setNewTribe({ ...newTribe, type: e.target.value })
                    }
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cate" value="Category" />
                  <Select
                    id="cate"
                    value={newTribe.category}
                    onChange={(e) =>
                      setNewTribe({ ...newTribe, category: e.target.value })
                    }
                  >
                    <option value="hobby">Hobby</option>
                    <option value="academic">Academic</option>
                    <option value="career">Career</option>
                    <option value="secret">Intimate matters</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="desc" value="Description" />
                  <Textarea
                    value={newTribe.description}
                    maxLength={200}
                    onChange={(e) =>
                      setNewTribe({ ...newTribe, description: e.target.value })
                    }
                  ></Textarea>
                </div>
                <div>
                  <Label htmlFor="img" value="Cover Photo" />
                  <FileInput
                    accept="image/*"
                    className="text-[#cbfd80]"
                    id="img"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="bg-[#3224f2] text-[#cbfd80]"
                onClick={handleAddTribe}
                pill
              >
                Create
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <Tab />
    </div>
  );
}
