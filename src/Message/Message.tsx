"use client";
import { Tab } from "../Components/Tabs";
import {
  Button,
  TextInput,
  Card,
  Avatar,
  Tooltip,
  Dropdown,
  Modal,
} from "flowbite-react";
import { useAppContext } from "../Context/AppContext";
import { useState, useRef } from "react";
import { SlMagnifier } from "react-icons/sl";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoMdSend } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoMdPhotos } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";
import EmojiPicker from "emoji-picker-react";
// import { GiphyFetch } from "@giphy/js-fetch-api";
// import { Grid } from "@giphy/react-components";

export const Message = () => {
  const { openModal, setOpenModal } = useAppContext();
  const [openChat, setOpenChat] = useState(true);
  const [openFriends, setOpenFriends] = useState(false);
  const [messages, setMessages] = useState<
    {
      content: string;
      image: string;
      reaction: string[];
      profile: string;
      //   stickernGIF: string;
    }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [emojiKey, setEmojiKey] = useState(0);
  //   const [GIFsticker, showGIFSticker] = useState(false);
  //   const [selectedGIFsticker, setSelectedGIFsticker] = useState<string | null>(
  //     null,
  //   );
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState<number | null>(
    null,
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() || newImage) {
      setMessages([
        ...messages,
        {
          content: newMessage,
          image: newImage,
          reaction: [],
          profile: selectedProfile!,
          //   stickernGIF: selectedGIFsticker || "",
        },
      ]);
      setNewMessage("");
      setNewImage("");
      setEmojiKey(emojiKey + 1);
      setOpenModal(false);
    }
  };

  const handleEmojiClick = (emojiObject: any) => {
    setNewMessage(newMessage + emojiObject.emoji);
  };

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleAddReaction = (index: number, emojiObj: any) => {
    const updatedMessages = [...messages];
    const selectedProfileMessages = updatedMessages.filter(
      (message) => message.profile === selectedProfile,
    );
    {
      /** Handle reaction duplication */
    }
    if (selectedProfileMessages[index].reaction.includes(emojiObj.emoji)) {
      selectedProfileMessages[index].reaction = selectedProfileMessages[
        index
      ].reaction.filter((reaction) => reaction !== emojiObj.emoji);
    } else {
      selectedProfileMessages[index].reaction.push(emojiObj.emoji);
    }
    setMessages(updatedMessages);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredMessageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredMessageIndex(null);
  };

  //   const gf = new GiphyFetch(process.env.GIPHY_API || "");

  const friends = [
    "Friend 1",
    "Friend 2",
    "Friend 3",
    "Friend 4",
    "Friend 5",
    "Friend 6",
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex-cols-2 h-auto sm:flex md:h-[650px] lg:h-[700px]">
        <div className="flex w-full flex-col sm:basis-1/3">
          <div className="z-20 grid h-44 grid-rows-3 gap-8 bg-[#3224f2]">
            <div className="flex-inline flex items-center justify-between p-10 ">
              <h1 className="text-xl font-bold text-slate-100 underline decoration-wavy sm:text-4xl">
                Inbox
              </h1>
              <div className="flex items-center space-x-5 font-bold sm:space-x-7">
                <Button
                  gradientMonochrome="lime"
                  className="py-1.0 px-0.5 sm:px-1.5"
                  pill
                >
                  <LuMessageSquarePlus
                    className="h-3 w-3 text-[#3224f2] sm:h-6 sm:w-6"
                    onClick={() => setOpenModal(true)}
                  />
                </Button>
              </div>
            </div>

            <div>
              <form>
                <div className="relative mx-12 my-5 w-3/4 items-center">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <SlMagnifier className="h-6 w-6 text-indigo-400" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block h-5 w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-12 text-sm text-gray-900"
                    placeholder="Search"
                  />
                  <Button
                    gradientMonochrome="lime"
                    type="submit"
                    className="p-0.25 absolute bottom-0.5 end-2.5 text-xs"
                    size="sm"
                    pill
                  >
                    Search
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-center space-x-20 font-satoshi-bold text-white sm:space-x-32">
              <p
                className="hover:cursor-pointer hover:text-[#cbfd80]"
                onClick={() => {
                  setOpenChat(true);
                  setOpenFriends(false);
                }}
              >
                Chats
              </p>
              <p
                className="hover:cursor-pointer hover:text-[#cbfd80]"
                onClick={() => {
                  setOpenChat(false);
                  setOpenFriends(true);
                }}
              >
                Add Friends
              </p>
            </div>
          </div>

          {/*Chat list and friend list column */}
          <div className="h-full">
            <Card className="h-full">
              {openChat && (
                <ul className="divide-y divide-gray-200 overflow-y-auto">
                  {friends.map((friend) => (
                    <li
                      key={friend}
                      className="flex-inline flex items-center gap-3 py-3 text-black hover:cursor-pointer hover:bg-gray-100"
                      onClick={() => setSelectedProfile(friend)}
                    >
                      <Avatar />
                      <div className="flex flex-col">
                        {friend}
                        {messages
                          .filter((message) => message.profile === friend)
                          .slice(-1)
                          .map(
                            (message, index) =>
                              message.content && (
                                <p
                                  className="max-w-md overflow-hidden text-ellipsis text-gray-300"
                                  key={index}
                                >
                                  You: {message.content}
                                </p>
                              ),
                          )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {openFriends && (
                <ul className="divide-y divide-gray-200 overflow-y-auto">
                  {friends.map((friend) => (
                    <li
                      key={friend}
                      className="flex-inline flex justify-between gap-3 py-3 text-black hover:cursor-pointer hover:bg-gray-100"
                      //   onClick={() => setSelectedProfile(friend)}
                    >
                      <div className="flex-inline flex items-center gap-3">
                        <Avatar />
                        {friend}
                      </div>
                      <Button gradientMonochrome="lime" className="px-0.5" pill>
                        <FiPlus className="h-3 w-3 text-[#3224f2] sm:h-6 sm:w-6" />
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        </div>

        {/*Chat area */}
        <div className="hidden grow flex-col bg-gray-100 sm:flex">
          <div className="flex-1 overflow-y-auto p-4">
            {/*We will put messages from other profiles here at later stage */}
            {selectedProfile &&
              messages
                .filter((message) => message.profile === selectedProfile)
                .map(
                  (message, index) =>
                    (message.content || message.image) && (
                      <div
                        key={index}
                        className="mb-2 justify-self-end text-wrap"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="relative flex-inline flex items-center">
                          {hoveredMessageIndex === index && (
                            <div className="rounded-full bg-white p-2 shadow-lg">
                              <EmojiPicker
                                //   reactions={["2764", "1f44d", "1f602", "1f622", "1f62e", "1f621","1f64f"]}
                                reactionsDefaultOpen={true}
                                onReactionClick={(event) =>
                                  handleAddReaction(index, event)
                                }
                              />
                            </div>
                          )}
                          <p className="max-w-md overflow-x-auto rounded-lg bg-[#3224f2] p-3 text-white">
                            {message.content}
                          </p>
                        </div>
                        {message.image && (
                          <img
                            src={message.image}
                            alt="attachment"
                            className="max-w-md rounded-lg justify-self-end"
                          />
                        )}
                        {message.reaction && (
                          <p className="justify-self-end rounded-full bg-white p-2">
                            {message.reaction}
                          </p>
                        )}
                      </div>
                    ),
                )}
          </div>

          {/**Message sending modal */}
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body>
              <div className="flex items-center justify-between">
                <h1 className="font-satoshi-bold text-xl underline decoration-wavy">
                  Send a message
                </h1>
                <Button
                  gradientMonochrome="lime"
                  className="py-1.0 px-0.5"
                  pill
                  onClick={() => setOpenModal(false)}
                >
                  X
                </Button>
              </div>
              <div className="flex-inline mt-5 flex gap-2">
                <TextInput
                  type="text"
                  placeholder="Type a message"
                  className="flex-1"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-[#3224f2]"
                  pill
                >
                  <IoMdSend className="h-5 w-5 text-[#cbfd80]" />
                </Button>
              </div>

              <ul className="mt-5 divide-y divide-gray-200 overflow-y-auto">
                {friends.map((friend) => (
                  <li
                    key={friend}
                    className="flex-inline flex items-center gap-3 py-3 text-black hover:cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedProfile(friend)}
                  >
                    <Avatar />
                    <div className="flex flex-col">{friend}</div>
                  </li>
                ))}
              </ul>
            </Modal.Body>
          </Modal>

          {/* GIF/Sticker Picker later here*/}

          {selectedProfile && (
            <div className="flex items-center rounded-xl bg-white p-4">
              <Dropdown
                className="z-30"
                placement="top"
                label=""
                size="lg"
                renderTrigger={() => (
                  <div>
                    <FiPlus className="mr-2 h-8 w-8 text-[#3224f2] hover:cursor-pointer hover:text-[#cbfd80]" />
                  </div>
                )}
              >
                <Dropdown.Item icon={FaFile} onClick={handleFileInputClick}>
                  File
                </Dropdown.Item>
                <Dropdown.Item icon={IoMdPhotos} onClick={handleFileInputClick}>
                  Photo/Video
                </Dropdown.Item>
                <Dropdown.Item
                  icon={LuSticker}
                  //   onClick={() => showGIFSticker(true)}
                >
                  Sticker/GIF
                </Dropdown.Item>
              </Dropdown>

              <div className="flex-1 flex-col gap-3 items-end">
                {newImage && (
                  <img
                    src={newImage}
                    alt="attachment"
                    className="h-20 w-20 rounded-lg"
                  />
                )}
                <TextInput
                  type="text"
                  placeholder="Type a message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
              </div>

              <Tooltip
                content={
                  <EmojiPicker key={emojiKey} onEmojiClick={handleEmojiClick} />
                }
                trigger="click"
              >
                <MdOutlineEmojiEmotions className="mx-2 h-8 w-8 text-[#3224f2] hover:cursor-pointer hover:text-[#cbfd80]" />
              </Tooltip>
              <Button onClick={handleSendMessage} className="bg-[#3224f2]" pill>
                <IoMdSend className="h-5 w-5 text-[#cbfd80]" />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAddImage}
                className="hidden"
              />
            </div>
          )}
        </div>
      </div>

      <Tab />
    </div>
  );
};
