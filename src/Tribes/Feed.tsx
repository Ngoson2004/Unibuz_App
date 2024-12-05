"use client";
import { useState } from "react";
import { Button, Textarea, Modal, Select, FileInput } from "flowbite-react";
import { TribeHeader } from "../Components/TribeHeader";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useAppContext } from "../Context/AppContext";
import { SlMagnifier } from "react-icons/sl";
import Post from "./Post";

export function Feed() {
  const [posts, setPosts] = useState([
    {
      content: "Welcome to the feed! Share your thoughts.",
      likes: 0,
      share: 0,
      comments: [],
    },
  ]);
  const [newPostContent, setNewPostContent] = useState("");

  const handleAddPost = () => {
    if (newPostContent.trim() !== "") {
      setPosts([
        ...posts,
        { content: newPostContent, likes: 0, comments: [], share: 0 },
      ]);
      setNewPostContent("");
      setOpenModal(false);
    }
  };

  const closeModal = () => {
    if (newPostContent.trim() !== "") {
      const drafts = JSON.parse(localStorage.getItem("drafts") || "[]");
      drafts.push(newPostContent);
      localStorage.setItem("drafts", JSON.stringify(drafts));
    }
    setOpenModal(false);
  };

  const { openModal, setOpenModal } = useAppContext();
  const { openSearch, setOpenSearch } = useAppContext();
  const [openFile, setOpenFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-slate-100">
      <TribeHeader />
      <div className="container mx-auto py-10 lg:px-20 xl:px-52">
        <Modal
          show={openSearch}
          size="xl"
          onClose={() => setOpenSearch(false)}
          popup
        >
          <FaArrowLeft
            className="m-3 h-5 w-5 text-indigo-600 hover:text-lime-300"
            onClick={() => setOpenSearch(false)}
          />
          <Modal.Body>
            <form>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <SlMagnifier className="h-6 w-6 text-indigo-400" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block h-14 w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900"
                  placeholder="Search for Tribes"
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
          </Modal.Body>
        </Modal>

        <Modal show={openModal} size="6xl" onClose={() => closeModal()} popup>
          <FaArrowLeft
            className="absolute start-1 top-1 m-3 h-5 w-5 text-indigo-600 hover:text-lime-300"
            onClick={() => setOpenModal(false)}
          />
          <p className="w-full p-5 pb-10 text-center text-2xl font-bold text-indigo-600">
            Create Post
          </p>

          <Modal.Body>
            <Textarea
              placeholder="What's on your mind?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={10}
              className="mb-4"
              required
            />
            {openFile && (
              <FileInput
                // value={selectedFile}
                // onChange={(e) => setSelectedFile(e.target.files[0])}
                id="image-upload"
                className="mb-4 border-indigo-600 bg-indigo-100 text-indigo-600"
              />
            )}
            <div className="flex flex-row">
              <div className="flex basis-3/4 flex-wrap gap-4">
                <Button
                  className="px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  gradientDuoTone="greenToBlue"
                  onClick={() => setOpenFile(!openFile)}
                  size="sm"
                  pill
                >
                  <IoMdPhotos className="mr-2 h-5 w-5" />
                  Add Photo
                </Button>
                <Button
                  className="px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  gradientDuoTone="greenToBlue"
                  pill
                >
                  <FaVideo className="mr-2 h-5 w-5" />
                  Add Video
                </Button>
                <Button
                  className="px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  gradientDuoTone="greenToBlue"
                  pill
                >
                  <FaMapLocationDot className="mr-2 h-5 w-5" />
                  Add Location
                </Button>
                <Button
                  className="px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  gradientDuoTone="greenToBlue"
                  pill
                >
                  <BsEmojiHeartEyesFill className="mr-2 h-5 w-5" />
                  Add feeling
                </Button>
              </div>
              <div className="flex grow justify-end">
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="px-auto h-10 sm:h-12 sm:py-1.5"
                  onClick={handleAddPost}
                  type="submit"
                  pill
                  disabled={newPostContent.trim() === ""}
                >
                  Post
                  <FaArrowUp className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {posts.map((post, index) => (
          <Post
            key={index}
            content={post.content}
            initialLikes={post.likes}
            initialComments={post.comments}
            initialShares={post.share}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
