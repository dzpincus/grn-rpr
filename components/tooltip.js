export const Tooltip = (props) => {
  return (
    <div className="relative flex flex-col items-center group">
      {props.children}
      <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex flex-nowrap">
        <span
          style={{ minWidth: "7rem" }}
          className="relative text-center z-10 p-2 text-xs whitespace-pre-wrap leading-none text-white bg-gray-600 shadow-lg rounded-md"
        >
          {props.message}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};
