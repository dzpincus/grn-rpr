import Lottie from "react-lottie";
import DOMPurify from "dompurify";
import chevronData from "../../public/chevron-left.json";

import { useState, useEffect } from "react";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ForumPost({ post, toggle }) {
  const postContent = DOMPurify.sanitize(post.content);
  const [backClicked, setBackClicked] = useState(false);
  const [playBack, setPlayBack] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: chevronData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const clickBack = function () {
    setPlayBack(true);
    setTimeout(() => {
      toggle();
    }, 200);
  };
  return (
    <>
      <div className="w-full h-full card">
        <div className="bg-base-200 p-6 pt-2 flex flex-col items-start">
          <span onClick={clickBack} className="pb-4">
            <Lottie
              className="mx-0"
              options={defaultOptions}
              isPaused={!playBack}
              height={24}
              width={24}
            />
          </span>
          <h2 className="card-title text-5xl">{post.title} </h2>
        </div>
        <div className="card-body">
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postContent }}
          ></div>
        </div>
      </div>
      <div
        className="card-actions w-full
       bg-base-200 rounded-b-xl flex justify-end items-center pr-4"
      >
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            <a className="link">
              <FontAwesomeIcon icon={faCommentDots} />
              <span> Comment</span>
            </a>
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
}
