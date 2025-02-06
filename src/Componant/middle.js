import React, { useState } from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img8 from "../assets/img8.jpg";
import Img9 from "../assets/img9.jpg";
import Mlogo from "../assets/InstagramLogo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import NearMeIcon from "@mui/icons-material/NearMe";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./middle.css";

const stories = [
  { img: Img1, name: "Rahul" },
  { img: Img2, name: "Priya" },
  { img: Img3, name: "Amit" },
  { img: Img4, name: "Sneha" },
  { img: Img5, name: "Vikas" },
  { img: Img6, name: "Neha" },
  { img: Img7, name: "Ankit" },
  { img: Img8, name: "Pooja" },
  { img: Img7, name: "Ravi" },
  { img: Img8, name: "Simran" },
];

const initialPosts = [
  { id: 1, user: "Rahul", time: "36min", img: Img1, likes: 122700,comments : 50, comment: "That feeling when you bring home" },
  { id: 2, user: "Vaishnavi", time: "42min", img: Img2, likes: 13703,comments : 533, comment: "Happy Family" },
  { id: 3, user: "Amit", time: "6min", img: Img3, likes: 122,comments : 40, comment: "Nature" },
  { id: 4, user: "Sumit", time: "20min", img: Img7, likes: 1522,comments : 122, comment: "Cute Cat" },
  { id: 5, user: "Pooja", time: "55min", img: Img6, likes: 7522,comments : 200, comment: "Colourful day" },
  { id: 6, user: "Ravi", time: "27min", img: Img8, likes: 1300,comments : 110 , comment: "I am The Best" },
  { id: 7, user: "Radha", time: "3hr", img: Img9, likes: 1254,comments : 36 , comment: "Shine" },

];

const Middle = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [postLikes, setPostLikes] = useState(
    initialPosts.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {})
  );

  const handleLikeClick = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));

    setPostLikes((prev) => ({
      ...prev,
      [postId]: likedPosts[postId] ? prev[postId] - 1 : prev[postId] + 1,
    }));
  };
  const handleSaveClick = (postId) => {
    setSavedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (

   
    <div className="middleHomeSide">

        <div className="mobileTopBar">
            <div className="instaLogo">
                <img className="instalogoMobile"  src={Mlogo} alt="" />
            </div>
        </div>

      {/* Stories Section */}
      <div className="storyBlock">
        {stories.map((story, index) => (
          <div className="storyPerticular" key={index}>
            <div className="imgDiv">
              <img className="storyImg" src={story.img} alt={story.name} />
            </div>
            <div className="profileName">{story.name}</div>
          </div>
        ))}
      </div>

      {/* Posts Section */}
      <div className="postSection">
        {initialPosts.map((post) => (
          <div className="post" key={post.id}>
            <div className="postInfo">
              <img className="postInfoImg" src={post.img} alt={post.user} />
              <div className="postInfoName">{post.user}</div>
              <div className="timing">. {post.time}</div>
              <div className="moreoption">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="postImgpart">
              <img className="postImg" src={post.img} alt="" />
            </div>
            <div className="iconBlock">
  <div className="leftIcon">
    {/* Like Button with Animation */}
    <motion.div
      className="like"
      onClick={() => handleLikeClick(post.id)}
      animate={{ scale: likedPosts[post.id] ? [1, 1.4, 1] : 1 }}
      transition={{ duration: 0.3 }}
    >
      {likedPosts[post.id] ? (
        <FavoriteIcon sx={{ fontSize: "30px", color: "red" }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
      )}
    </motion.div>

    {/* Comment Button */}
    <div className="comment">
      <ChatBubbleOutlineRoundedIcon sx={{ fontSize: "30px" }} />
    </div>

    {/* Share Button */}
    <div className="share">
      <NearMeIcon sx={{ fontSize: "30px" }} />
    </div>
  </div>

  {/* Save Button */}
  <div className="rightIcon" onClick={() => handleSaveClick(post.id)}>
    {savedPosts[post.id] ? (
      <TurnedInIcon sx={{ fontSize: "30px", color: "black" }} />
    ) : (
      <TurnedInNotOutlinedIcon sx={{ fontSize: "30px" }} />
    )}
  </div>
</div>
            <div className="likeSection">
              <div className="likeImages">
                <img className="likeImg" src={Img1} alt="" />
                <img className="likeImg2" src={Img4} alt="" />
              </div>
              <div className="noOfLike">{postLikes[post.id].toLocaleString()} likes</div>
            </div>
            <div className="postAbout">
              <div className="postAbName">{post.user}</div>
              <div className="infoComment">{post.comment}</div>
            </div>
            <div className="viewComment">View all {post.comments} comments</div>
            <div className="addComment">Add a comment...</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
