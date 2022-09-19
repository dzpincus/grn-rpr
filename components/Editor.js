const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

export default function Editor(props) {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <ReactQuill
      onChange={(state) => props.onStateChange(state)}
      value={props.value}
      className={`${props.error ? "border border-error" : ""}`}
      modules={quillModules}
      formats={quillFormats}
    />
  );
}
