import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

export default function ForumForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
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

  const [disabled, setDisabled] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async function (data) {
    setSubmitting(true);
    setDisabled(true);
    fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json().then((post) => {
          props.addPost(post);
          props.setModalOpen(false);
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        clearErrors();
        setDisabled(false);
        setSubmitting(false);
      });
  };

  return (
    <form
      className={submitting ? "cursor-wait" : "cursor-default"}
      onSubmit={handleSubmit(onSubmit)}
    >
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
          value={getValues("content")}
        />

        <button disabled={disabled} type="submit" className="btn mt-12">
          Save
        </button>
      </div>
    </form>
  );
}
