import { TribeHeader } from "../components/TribeHeader";
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
  Spinner,
  Alert,
} from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/shared/context/AppContext";
import { useCreateTribe } from "../hooks/useCreateTribe";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../../shared/providers/AuthProvider";
import { useGetTribes } from "../hooks/useGetTribes";

export default function MyTribesPage() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data: tribes, isLoading, error } = useGetTribes();
  const { openModal, setOpenModal } = useAppContext();
  console.log(tribes);

  const createTribeMutation = useCreateTribe({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tribes", user?.id] });
      setOpenModal(false);
      // Reset form after successful submission
      setNewTribe({
        name: "",
        type: "",
        category: "",
        description: "",
        img: null,
      });
    },
    onError: (error) => {
      console.error("Error creating tribe: ", error);
    },
  });
  const [newTribe, setNewTribe] = useState<{
    name: string;
    type: string;
    category: string;
    description: string;
    img: File | null;
  }>({
    name: "",
    type: "",
    category: "",
    description: "",
    img: null,
  });
  const navigate = useNavigate();

  const handleAddTribe = async () => {
    // Validate required fields
    if (!newTribe.name.trim()) {
      alert("Please enter a tribe name");
      return;
    }
    if (!newTribe.type) {
      alert("Please select a tribe type");
      return;
    }
    if (!newTribe.category) {
      alert("Please select a category");
      return;
    }

    try {
      await createTribeMutation.mutateAsync({
        img: newTribe.img,
        tribe: {
          tribe_name: newTribe.name.trim(),
          is_private: newTribe.type.toLowerCase() === "private",
          tribe_category: newTribe.category,
          tribe_description: newTribe.description.trim(),
          creator_id: user?.id,
        },
      });
    } catch (error) {
      console.error("Failed to create tribe:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setNewTribe({ ...newTribe, img: file });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div>
        <TribeHeader />
        <div className="container mx-auto py-44 lg:px-20 xl:px-52">
          <div className="flex-inline mx-auto mb-10 flex w-10/12 justify-between rounded-xl bg-white p-5">
            <div className="flex-inline flex items-center gap-5">
              <FiPlus
                className="size-10 cursor-pointer rounded-full bg-indigo-100 p-1 text-[#3224f2] hover:bg-[#cbfd80] hover:text-green-500"
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
              {isLoading ? (
                <div className="flex justify-center py-4">
                  <Spinner size="xl" />
                </div>
              ) : error ? (
                <Alert color="failure">
                  <span>Error loading tribes: {error.message}</span>
                </Alert>
              ) : tribes && tribes.length > 0 ? (
                <ul className="divide-y divide-gray-200 px-10 dark:divide-gray-700">
                  {tribes.map((tribe) => (
                    <li
                      key={tribe.tribe_id}
                      className="flex-inline flex cursor-pointer items-center justify-start gap-5 py-4 hover:bg-gray-100"
                      onClick={() =>
                        navigate(`/home/tribes/my-tribes/${tribe.tribe_id}`)
                      }
                    >
                      <Avatar img={tribe.tribe_profile[0].url ?? ""} />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-md font-bold">{tribe.tribe_name}</p>
                        {tribe.tribe_description && (
                          <p className="text-sm font-light">
                            {tribe.tribe_description
                              .split(" ")
                              .slice(0, 5)
                              .join(" ")}
                            {tribe.tribe_description.split(" ").length > 5 &&
                              "..."}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-4 text-center">
                  No tribes found. Create one to get started!
                </p>
              )}
            </div>
          </Card>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
              <p className="w-full text-center font-satoshi-bold text-2xl text-indigo-600">
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
                    required
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
                    required
                    value={newTribe.type}
                    onChange={(e) =>
                      setNewTribe({ ...newTribe, type: e.target.value })
                    }
                  >
                    <option value="">Select type</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cate" value="Category" />
                  <Select
                    id="cate"
                    required
                    value={newTribe.category}
                    onChange={(e) =>
                      setNewTribe({ ...newTribe, category: e.target.value })
                    }
                  >
                    <option value="">Select category</option>
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
                disabled={createTribeMutation.isPending}
              >
                {createTribeMutation.isPending ? "Creating..." : "Create"}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
