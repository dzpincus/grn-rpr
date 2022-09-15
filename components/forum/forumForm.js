import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const submit = function () {};

export default function ForumForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  useEffect(() => {
    setValue("title", "");
    setValue("content", "");
  }, [props.modalOpen]);

  const onEditorStateChange = (editorState) => {
    setValue("content", editorState);
  };

  const onSubmit = async function (data) {
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col font-serif">
        <div className="flex justify-between">
          <h1 className="text-2xl pb-5">Create a new Post</h1>
          <label
            onClick={() => props.setModalOpen(false)}
            className="btn btn-sm btn-circle font-sans"
          >
            x
          </label>
        </div>
        <label className="text-lg pb-4">Post Title</label>
        <input
          {...register("title", { required: true })}
          type="text"
          name="title"
          className={`input input-bordered ${
            errors.title ? "input-error" : ""
          }`}
        />
        <label htmlFor="content" className="text-lg pt-8 pb-4">
          Post Content
        </label>
        <ReactQuill
          onChange={onEditorStateChange}
          className={`${errors.title ? "border border-error" : ""}`}
          name="content"
        />

        <button type="submit" className="btn mt-12">
          Save
        </button>
      </div>
    </form>
  );
}
