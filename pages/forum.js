import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/GrinReaper.png";
import Image from "next/image";

import Loader from "../components/loader";
import ForumHeader from "../components/forum/forumHeader";
import ForumTable from "../components/forum/forumTable";
import ForumForm from "../components/forum/forumForm";

import { titleItalics } from "../utils/text";
import { getSWR } from "../utils/requests";
import Link from "next/link";

export default function Forum() {
  const { user, error, isLoading } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(0);

  const pageSize = 10;

  const modalClick = function (evt) {
    if (
      evt.target.classList.contains("cursor-pointer") &&
      evt.target.classList.contains("modal")
    ) {
      setModalOpen(false);
    }
  };
  const postsPath =
    "/api/posts/?" +
    new URLSearchParams({ skip: page * pageSize, take: pageSize });
  const { data: posts, error: postError } = getSWR(postsPath);

  const countPath = "/api/posts/count/";
  const { data: count, error: countError } = getSWR(countPath);

  const addPost = function (post) {
    posts.unshift(post);
  };

  if (isLoading) {
    return (
      <>
        <ForumHeader />
        <br />
        <Loader />
      </>
    );
  }

  if (user) {
    return (
      <>
        <ForumHeader />
        <div className="bg-base-100 flex flex-col flex-1 items-center h-full z-0">
          <div className="w-full px-8 sm:px-0 pt-16 sm:w-1/2 pb-20 h-full">
            <div className="flex w-full justify-between items-center mb-4 px-3">
              <h2 className="font-serif text-5xl">{titleItalics("Forum")}</h2>
              <label
                htmlFor="forum-form-modal"
                onClick={() => setModalOpen(true)}
                className="btn float-right"
              >
                <FontAwesomeIcon icon={faSquarePlus} className="pr-2" />
                New Post
              </label>
            </div>
            <ForumTable
              posts={posts}
              user={user}
              page={page}
              setPage={setPage}
              pageCount={Math.floor(count / pageSize)}
            />
          </div>
        </div>
        <label
          htmlFor="forum-form-modal"
          className={`modal cursor-pointer ${modalOpen ? "modal-open" : ""}`}
          onClick={modalClick}
        >
          <label className="modal-box relative bg-base-200" htmlFor="">
            <ForumForm
              modalId="forum-form-modal"
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              addPost={addPost}
              user={user}
            />
          </label>
        </label>
      </>
    );
  } else {
    return (
      <>
        <ForumHeader />
        <div className="flex justify-center items-center flex-1 flex-col bg-base-100 font-serif">
          <div className="text-center py-12 md:w-1/2  md:bg-base-200 rounded-2xl">
            <h1 className="text-5xl">Welcome to the Grin Reaper Forum!</h1>
            <Image
              loading="eager"
              alt="Grin Reaper Logo"
              src={logo}
              width={346}
              height={469}
              priority
            />

            <h2 className="text-xl">
              Please{" "}
              <Link className="text-accent" href="/api/auth/login">
                log in
              </Link>{" "}
              to enter the forum
            </h2>
          </div>
        </div>
      </>
    );
  }
}

Forum.getLayout = function getLayout(page) {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">{page}</div>
    </>
  );
};
