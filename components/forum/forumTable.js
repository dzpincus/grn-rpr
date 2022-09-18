import React, { useState, useEffect, createRef } from "react";
import { CSSTransition } from "react-transition-group";

import ForumPost from "./forumPost";
import Loader from "../loader";

export default function ForumTable({ posts, user }) {
  const [viewTable, setViewTable] = useState(true);
  const [viewPost, setViewPost] = useState(false);
  const [activePost, setActivePost] = useState({});

  const toggle = function () {
    if (viewTable) {
      setViewTable(false);
      setTimeout(() => {
        setViewPost(true);
      }, 500);
    } else {
      setViewPost(false);
      setTimeout(() => {
        setViewTable(true);
      }, 500);
    }
  };

  const clickPost = function (post) {
    if (post.author.id === user.id) {
      fetch(`/api/posts/view?id=${post.id}`, { method: "POST" });
    }
    setActivePost(post);
    toggle();
  };

  const hoverRow = function (event, hover) {
    const row = event.target.closest("tr");
    for (const cell of row.cells) {
      if (hover) {
        cell.classList.add("bg-base-200");
      } else {
        cell.classList.remove("bg-base-200");
      }
    }
  };

  const formatDate = function (dateString) {
    const d = new Date(dateString);
    return d.toLocaleString("lookup");
  };

  return (
    <>
      <div className="shadow-2xl rounded-2xl">
        <CSSTransition
          in={viewTable}
          timeout={500}
          classNames="fade-in-out"
          unmountOnExit
        >
          <table className="table w-full">
            <thead>
              <tr className="text-right">
                <th className="text-left">Title</th>
                <th>Replies</th>
                <th>Views</th>
                <th>Date Posted</th>
                <th>Author</th>
              </tr>
            </thead>
            {posts ? (
              <tbody>
                {posts.map((post, index) => {
                  return (
                    <tr
                      key={index}
                      className="cursor-pointer text-right"
                      onMouseOver={(event) => hoverRow(event, true)}
                      onMouseOut={(event) => hoverRow(event, false)}
                      onClick={() => clickPost(post)}
                    >
                      <td className="text-left">{post.title}</td>
                      <td></td>
                      <td>{post.views}</td>
                      <td>{formatDate(post.createdAt)}</td>
                      <td>
                        <img
                          src={post.author.profilePicture}
                          alt={post.author.email}
                          height="40px"
                          width="40px"
                          align="right"
                          className="rounded-full"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <div className="w-full flex justify-center">
                      <Loader />
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </CSSTransition>
        <CSSTransition
          in={viewPost}
          timeout={500}
          classNames="fade-in-out"
          unmountOnExit
        >
          <>
            <ForumPost post={activePost} toggle={toggle} />
          </>
        </CSSTransition>
      </div>
    </>
  );
}
