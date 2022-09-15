import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/GrinReaper.png";
import Image from "next/image";

import ForumHeader from "../components/forum/forumHeader";
import ForumForm from "../components/forum/forumForm";

export default function Forum() {
  const { user, error, isLoading } = useUser();

  const [modalOpen, setModalOpen] = useState(false);

  const getPosts = async function () {
    await fetch("/api/posts");
  };

  const modalClick = function (evt) {
    if (
      evt.target.classList.contains("cursor-pointer") &&
      evt.target.classList.contains("modal")
    ) {
      setModalOpen(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-64">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  if (user) {
    return (
      <>
        <ForumHeader />
        <div className="bg-base-100 flex flex-col flex-1 items-center">
          <div className="w-full pt-16 sm:w-3/4 md:w-1/2 h-12">
            <label
              htmlFor="forum-form-modal"
              onClick={() => setModalOpen(true)}
              className="btn float-right"
            >
              <FontAwesomeIcon icon={faSquarePlus} className="pr-2" />
              New Post
            </label>
          </div>
        </div>
        <label
          htmlFor="forum-form-modal"
          className={`modal cursor-pointer ${modalOpen ? "modal-open" : ""}`}
        >
          <label className="modal-box relative bg-base-200" htmlFor="">
            <ForumForm
              modalId="forum-form-modal"
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
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
              <a className="text-accent" href="/api/auth/login">
                log in
              </a>{" "}
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
