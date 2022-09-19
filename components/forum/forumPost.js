import Lottie from "react-lottie";
import DOMPurify from "dompurify";
import chevronData from "../../public/chevron-left.json";

import { useState, useEffect } from "react";
import { faCommentDots, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Editor from "../Editor";
import { formatDate } from "../../utils/date";

import ForumComments from "./forumComments";

export default function ForumPost({ post, toggle, deletePost }) {
  const [comments, setComments] = useState(post.comments);

  const postContent = DOMPurify.sanitize(post.content);
  const [playBack, setPlayBack] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [commentDisabled, setCommentDisabled] = useState(false);

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

  const addComment = async function () {
    if (!comment) {
      setCommentError(true);
      return;
    }
    setCommentError(false);
    setCommentDisabled(true);
    await fetch("api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: comment, postId: post.id }),
    })
      .then((response) => {
        response.json().then((comment) => {
          setComments([comment].concat(comments));
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setCommentError(false);
        setCommentDisabled(false);
        setCommentOpen(false);
      });
  };

  return (
    <>
      <div className="w-full h-full card bg-base-200">
        <div className="p-6 pt-2 flex flex-col items-start">
          <div className="w-full flex justify-between items-center pb-4">
            <span onClick={clickBack}>
              <Lottie
                className="mx-0"
                options={defaultOptions}
                isPaused={!playBack}
                height={24}
                width={24}
              />
            </span>
            <a
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this post?")
                ) {
                  deletePost(post.id);
                }
              }}
              className="cursor-pointer active:text-secondary active:text-sm"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </a>
          </div>
          <h2 className="card-title text-5xl">{post.title} </h2>
          <div className="flex items-center mt-4">
            <img
              src={post.author.profilePicture}
              alt={post.author.email}
              height="40px"
              width="40px"
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <span>{post.author.firstName + " " + post.author.lastName}</span>
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
        <div className=" p-8 rounded-3xl border border-base-300 bg-base-100 m-4">
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: postContent }}
          ></div>
        </div>
        <div
          className="card-actions w-full
       rounded-b-xl flex justify-end items-center"
        >
          <div
            tabIndex={0}
            className={`w-full pt-4 collapse ${
              commentOpen ? "collapse-open" : "collapse-close"
            }`}
          >
            <div className="collapse-title p-0 pr-4">
              <button
                className="btn btn-ghost btn-sm float-right"
                onClick={() => {
                  setCommentOpen(!commentOpen);
                }}
              >
                <FontAwesomeIcon icon={faCommentDots} />
                <span className="pl-4"> Comment</span>
              </button>
            </div>
            <div
              className={`collapse-content ${
                commentDisabled ? "cursor-wait" : "cursor-default"
              }`}
            >
              <Editor
                onStateChange={setComment}
                value={comment}
                error={commentError}
              />
              <button
                onClick={addComment}
                disabled={commentDisabled}
                className="btn float-right mt-4"
              >
                Save
              </button>
            </div>
            <div className="w-full px-4 mb-4">
              <div className="divider"></div>
              <ForumComments comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
