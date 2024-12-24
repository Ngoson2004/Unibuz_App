"use client";
import { useState } from "react";
import { Button, Textarea, Modal, Select, FileInput } from "flowbite-react";
import { TribeHeader } from "../Components/TribeHeader";
import { IoMdPhotos } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useAppContext } from "../Context/AppContext";
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
  const [openFile, setOpenFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-slate-100">
      <TribeHeader />
      <div className="container mx-auto py-10 lg:px-20 xl:px-52">

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
                  className="bg-[#3224f2] text-[#cbfd80] px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  onClick={() => setOpenFile(!openFile)}
                  size="sm"
                  pill
                >
                  <IoMdPhotos className="mr-2 h-5 w-5" />
                  Add Photo
                </Button>
                <Button
                  className="bg-[#3224f2] text-[#cbfd80] px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  pill
                >
                  <FaVideo className="mr-2 h-5 w-5" />
                  Add Video
                </Button>
                <Button
                  className="bg-[#3224f2] text-[#cbfd80] px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
                  pill
                >
                  <FaMapLocationDot className="mr-2 h-5 w-5" />
                  Add Location
                </Button>
                <Button
                  className="bg-[#3224f2] text-[#cbfd80] px-auto h-10 sm:h-auto sm:w-auto sm:py-1.5"
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
