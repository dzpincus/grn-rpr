import React, { useState, useEffect, createRef } from "react";
import { CSSTransition } from "react-transition-group";

import ForumPost from "./forumPost";
import Loader from "../loader";
import { formatDate } from "../../utils/date";

export default function ForumTable({
  posts,
  user,
  page,
  setPage,
  pageCount,
  postsError,
  mutatePosts,
}) {
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
  const deletePost = async function (postId) {
    {
      await fetch(`api/posts/${postId}`, {
        method: "DELETE",
      }).then((response) => {
        toggle();
        mutatePosts();
      });
    }
  };

  const clickPost = function (post) {
    if (post.author.email !== user.email) {
      fetch(`/api/posts/${post.id}`, { method: "GET" });
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

  return (
    <>
      <CSSTransition
        in={viewTable}
        timeout={300}
        classNames="fade-in-out"
        unmountOnExit
      >
        <>
          <div className="shadow-2xl rounded-2xl">
            <table className="table-compact md:table w-full">
              <thead>
                <tr className="text-right">
                  <th className="text-left">Title</th>
                  <th className="text-center">Comments</th>
                  <th className="text-center">Views</th>
                  <th className="text-center">Posted At</th>
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
                        <td className="text-center">{post.comments.length}</td>
                        <td className="text-center">{post.views}</td>
                        <td className="text-center">
                          {formatDate(post.createdAt)}
                        </td>
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
                <>
                  {!postsError && (
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
                </>
              )}
            </table>
          </div>
          {pageCount >= 1 && (
            <div className="flex justify-center mt-10">
              <div className="btn-group">
                <button
                  className="btn"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                >
                  «
                </button>
                <button className="btn">Page {page + 1}</button>
                <button
                  className="btn"
                  disabled={page === pageCount}
                  onClick={() => setPage(page + 1)}
                >
                  »
                </button>
              </div>
            </div>
          )}
          {posts && posts.length === 0 && (
            <div className="flex justify-center mt-10">No posts</div>
          )}
        </>
      </CSSTransition>
      <CSSTransition
        in={viewPost}
        timeout={300}
        classNames="fade-in-out"
        unmountOnExit
      >
        <>
          <div className="shadow-2xl rounded-2xl">
            <ForumPost
              user={user}
              post={activePost}
              toggle={toggle}
              deletePost={deletePost}
            />
          </div>
        </>
      </CSSTransition>
    </>
  );
}
