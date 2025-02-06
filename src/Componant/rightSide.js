import React, { useState } from 'react';
import './rightSide.css';
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img8 from "../assets/img8.jpg";

// Array of images for different users
const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

const allSuggestions = [
  { username: "abhi_@123", suggestion: "Suggested for you", image: images[0] },
  { username: "rahul_xyz", suggestion: "Popular on Instagram", image: images[1] },
  { username: "priya.k", suggestion: "New to Instagram", image: images[2] },
  { username: "dev_coder", suggestion: "Follows you", image: images[3] },
  { username: "rohit.56", suggestion: "Suggested for you", image: images[4] },
  { username: "sam_rock", suggestion: "New on Instagram", image: images[5] },
  { username: "coder_king", suggestion: "Suggested for you", image: images[6] },
  { username: "jessy_m", suggestion: "Follows you", image: images[7] },
  { username: "alex_w", suggestion: "Suggested for you", image: images[0] },
  { username: "neha.9", suggestion: "Popular on Instagram", image: images[1] },
  { username: "john_doe", suggestion: "New to Instagram", image: images[2] },
  { username: "rohan_dev", suggestion: "Suggested for you", image: images[3] },
  { username: "steve.jobs", suggestion: "Tech Enthusiast", image: images[4] },
  { username: "lisa_w", suggestion: "Follows you", image: images[5] },
  { username: "elon_musk", suggestion: "Entrepreneur", image: images[6] }
];

const RightSide = () => {
  const [visibleUsers, setVisibleUsers] = useState(5);  // Initially show 5 users
  const [followState, setFollowState] = useState(
    allSuggestions.reduce((acc, user) => {
      acc[user.username] = false;
      return acc;
    }, {})
  );

  const toggleFollow = (username) => {
    setFollowState((prev) => ({
      ...prev,
      [username]: !prev[username],
    }));
  };

  const handleSeeAll = () => {
    setVisibleUsers(visibleUsers === 5 ? allSuggestions.length : 5);
  };

  return (
    <div className="rightSideHome">
      {/* Top Profile */}
      <div className="topProfileRight">
        <div className="leftRightProfile">
          <div className="imgDivRightSide">
            <img className="imageRightSideProfile" src={Img8} alt="Profile" />
          </div>
          <div className="UserNameBlock">
            <div className="UserNameRightSide">shubham_kundalwal</div>
            <div className="UserFullName">Shubham Santosh Kundalwal</div>
          </div>
        </div>
        <div className="switchBtn">Switch</div>
      </div>

      {/* Suggested Users */}
      <div className="bottomRightSide">
        <div className="suggestedBlock">
          <div className="suggestionForYou">Suggested for you</div>
          <div className="seeAllBtn" onClick={handleSeeAll}>
            {visibleUsers === 5 ? "See All" : "See Less"}
          </div>
        </div>

        <div className="followBlockRightSide">
          {allSuggestions.slice(0, visibleUsers).map((user, index) => (
            <div key={index} className="topProfileRightBottomProfile">
              <div className="leftRightProfile">
                <div className="imgDivRightSide">
                  <img className="imageRightSideProfile" src={user.image} alt="User" />
                </div>
                <div className="suggestedUserNameBlock">
                  <div className="UserNameRightSide">{user.username}</div>
                  <div className="suggetionForyou">{user.suggestion}</div>
                </div>
              </div>
              <div
                className={`switchBtn ${followState[user.username] ? "unfollowBtn" : ""}`}
                onClick={() => toggleFollow(user.username)}
              >
                {followState[user.username] ? "Unfollow" : "Follow"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
