import React, { useState } from "react";
import { Button, TextInput, Textarea, Dropdown, Avatar } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { BiHide } from "react-icons/bi";

interface PostProps {
  content: string;
  initialLikes: number;
  initialShares: number;
  initialComments: string[];
}

const Post: React.FC<PostProps> = ({
  content,
  initialLikes,
  initialComments,
  initialShares,
}) => {
  const [likes, setLikes] = useState(false);
  const [likeNo, setLikeNo] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [shares, setShares] = useState(false);
  const [shareNo, setShareNo] = useState(initialShares);

  const handleLike = () => {
    setLikes(!likes);
    if (likes === false) {
      setLikeNo(likeNo + 1);
    } else {
      setLikeNo(likeNo - 1);
    }
  };

  const handleShare = () => {
    setShares(!shares);
    if (shares === false) {
      setShareNo(shareNo + 1);
    } else {
      setShareNo(shareNo - 1);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const [showComment, setShowComment] = useState(false);

  return (
    <div className="mb-10 rounded-[40px] bg-white w-full p-5 sm:p-8 shadow-md">
      <div className="flex flex-col gap-5">
        <div className="px-auto flex flex-inline items-center">
          <div className="flex flex-wrap gap-5 basis-3/4">
            <Avatar alt="Ava" rounded />
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold text-lg">Ngo Son</p>
              <p className="text-sm text-gray-500">20h</p>
            </div>
          </div>
          <Dropdown
            label="More"
            className="mt-4"
            renderTrigger={() => (
              <div className="flex grow justify-end">
                <BsThreeDots className="h-5 w-5 text-indigo-600 hover:text-lime-300 cursor-pointer" />
              </div>
            )}
          >
            <Dropdown.Item icon={MdReportGmailerrorred}>Report</Dropdown.Item>
            <Dropdown.Item icon={BiHide}>Hide</Dropdown.Item>
            <Dropdown.Item icon={MdDelete}>Delete</Dropdown.Item>
          </Dropdown>
        </div>

        <div className="border-b border-indigo-600 pb-5 text-gray-800">
          {content}
        </div>
        <div className="flex-inline flex items-center gap-4">
          <Button gradientDuoTone="purpleToPink" onClick={handleLike} pill>
            <FaHeart className="mr-2 h-5 w-5" /> {likeNo}
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            onClick={() => setShowComment(!showComment)}
            pill
          >
            <FaCommentDots className="mr-2 h-5 w-5" /> {comments.length}
          </Button>
          <Button gradientDuoTone="purpleToPink" onClick={handleShare} pill>
            <IoIosSend className="mr-2 h-6 w-6" /> {shareNo}
          </Button>
        </div>
      </div>

      {showComment && (
        <div className="mt-5">
          <h3 className="mb-2.5 text-lg font-semibold">Comments</h3>
          {comments.map((comment, index) => (
            <div className="flex-inline text-md mb-8 flex gap-3 text-gray-600">
              <p className="font-semibold">Son Ngo</p>
              <p key={index} className="font-normal">
                {comment}
              </p>
            </div>
          ))}
          <div className="mt-2 flex items-center">
            <TextInput
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="mb-2 flex-grow rounded-full"
            />
            <Button
              gradientDuoTone="pinkToOrange"
              onClick={handleAddComment}
              pill
              className="ml-2"
            >
              <FaArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
