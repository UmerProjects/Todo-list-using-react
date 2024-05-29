import { useDebugValue, useState } from "react";

export default function LikeButton() {
  let [isLisked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLisked);
    setClicks(clicks + 1)
  };

  let likeStyle = {color: "red"}
  return (
    <div>
        <p>Clicks = {clicks}</p>
    <p onClick={toggleLike}>
      {isLisked ? (
        <i className="fa-solid fa-heart" style={likeStyle}></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </p>
    </div>
  );
}
