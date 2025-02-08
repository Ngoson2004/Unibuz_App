import { useParams, Link } from "react-router-dom";
import { Button, Dropdown, Modal, Textarea, FileInput } from "flowbite-react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { MdOutlineReport } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Post from "../components/Post";
import myImage from "@/shared/assets/media/artTribe.png";
import { useAppContext } from "@/shared/context/AppContext";

export default function TribeDetailsPage() {
  const { id } = useParams();
  const [join, setJoin] = useState(false);

  // Fetch tribe details using the id
  // For simplicity, we'll use static data here
  const tribe = {
    id,
    name: "Art Tribe",
    description: "This is an example tribe description.",
    // img: "./src/media/animeClub.jpg",
    // img: "/Users/ngoson/Desktop/Unibuz/Unibuz_App/src/media/animeClub.jpg",
    img: myImage,
    posts: [],
    members: [],
    events: [],
  };

  const [posts, setPosts] = useState([
    {
      content: "Welcome to the feed! Share your thoughts.",
      image: "",
      likes: 0,
      share: 0,
      comments: [],
    },
  ]);

  const handleAddPost = () => {
    if (newPostContent.trim() !== "") {
      setPosts([
        ...posts,
        {
          content: newPostContent,
          image: "",
          likes: 0,
          comments: [],
          share: 0,
        },
      ]);

      if (newImage !== "") {
        setPosts([
          ...posts,
          {
            content: newPostContent,
            image: newImage,
            likes: 0,
            comments: [],
            share: 0,
          },
        ]);
      }

      setNewPostContent("");
      setOpenModal(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filePath = URL.createObjectURL(file);
      setNewImage(filePath);
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

  const { openModal, setOpenModal } = useAppContext(); //useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [newImage, setNewImage] = useState("");
  const [openFile, setOpenFile] = useState(false);
  //   const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //   const [members, setMembers] = useState([]);

  return (
    <div className="min-h-screen bg-slate-100 pb-20">
      <div className="w-screen rounded-[40px] bg-white p-5">
        <img
          src={tribe.img}
          alt={tribe.name}
          className="my-5 h-[400px] w-full rounded-[40px] object-cover"
        />

        <div className="flex-inline mx-10 flex items-center justify-between border-b-2 py-8">
          <div className="flex-inline flex gap-5">
            <Link to="/tribes">
              <FaArrowLeft className="mt-1 size-8 cursor-pointer rounded-full bg-slate-100 p-2 hover:text-lime-300" />
            </Link>
            <h1 className="mb-5 font-clash-grotesk-semibold text-4xl">
              {tribe.name}
            </h1>
          </div>
          <div className="flex-inline flex items-center gap-5">
            {!join && (
              <Button
                onClick={() => setJoin(true)}
                size="lg"
                className="cursor-pointer bg-[#3224f2] px-5 text-[#cbfd80]"
                pill
              >
                Join
              </Button>
            )}
            {join && (
              <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                  <Button
                    size="lg"
                    className="cursor-pointer border-2 border-[#3224f2] bg-transparent px-2 text-[#3224f2]"
                    pill
                  >
                    Joined
                    <IoMdArrowDropdown className="ml-4 mt-1" />
                  </Button>
                )}
              >
                <Dropdown.Item icon={FaUserFriends} className="font-satoshi-md">
                  Invite
                </Dropdown.Item>
                <Dropdown.Item
                  icon={IoShareOutline}
                  className="font-satoshi-md"
                >
                  Share
                </Dropdown.Item>
                <Dropdown.Item
                  icon={VscSignOut}
                  onClick={() => setJoin(false)}
                  className="font-satoshi-md"
                >
                  Leave
                </Dropdown.Item>
                <Dropdown.Item
                  icon={MdOutlineReport}
                  className="font-satoshi-md"
                >
                  Report
                </Dropdown.Item>
              </Dropdown>
            )}
            <Button
              gradientMonochrome="lime"
              onClick={() => setOpenModal(true)}
              className="cursor-pointer p-2 text-[#3224f2]"
              pill
            >
              Create Post
            </Button>

            <Modal
              show={openModal}
              size="6xl"
              onClose={() => closeModal()}
              popup
            >
              <FaArrowLeft
                className="absolute start-1 top-1 m-3 size-5 text-indigo-600 hover:text-lime-300"
                onClick={() => setOpenModal(false)}
              />
              <p className="w-full p-5 pb-10 text-center font-satoshi-bold text-2xl text-indigo-600">
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
                    accept="image/*, video/*"
                    id="media-upload"
                    onChange={handleFileChange}
                    className="mb-4 border-indigo-600 bg-indigo-100 text-indigo-600"
                    multiple
                  />
                )}
                <div className="flex flex-row">
                  <div className="flex basis-3/4 flex-wrap gap-4">
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
                      pill
                    >
                      <FaMapLocationDot className="mr-2 size-5" />
                      Add Location
                    </Button>
                    <Button
                      className="px-auto h-10 bg-[#3224f2] text-[#cbfd80] sm:size-auto sm:py-1.5"
                      pill
                    >
                      <BsEmojiHeartEyesFill className="mr-2 size-5" />
                      Add feeling
                    </Button>
                  </div>
                  <div className="flex grow justify-end">
                    <Button
                      gradientMonochrome="lime"
                      className="px-auto h-10 sm:h-12 sm:py-1.5"
                      onClick={handleAddPost}
                      type="submit"
                      pill
                      disabled={newPostContent.trim() === ""}
                    >
                      Post
                      <FaArrowUp className="ml-2 size-5" />
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="flex-rows flex items-center justify-center space-x-80 py-7 font-satoshi-md">
          <Link className="hover:text-[#3224f2]" to="">
            Info
          </Link>
          <Link className="hover:text-[#3224f2]" to="">
            Posts
          </Link>
          <Link className="hover:text-[#3224f2]" to="">
            Members
          </Link>
          <Link className="hover:text-[#3224f2]" to="">
            Events
          </Link>
        </div>

        {/* Add sections for posts, members, and events */}
      </div>

      <div className="m-20 rounded-[40px] bg-white p-10">
        <h2 className="mb-5 font-clash-grotesk-semibold text-3xl">
          Tribe Description
        </h2>
        <p className="font-satoshi-md">{tribe.description}</p>
      </div>

      <div className="m-20">
        {posts.map((post, index) => (
          <Post
            key={index}
            content={post.content}
            image={post.image}
            initialLikes={post.likes}
            initialComments={post.comments}
            initialShares={post.share}
          />
        ))}
      </div>
    </div>
  );
}
