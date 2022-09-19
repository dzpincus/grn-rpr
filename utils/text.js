export const titleItalics = function (text) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span key={index}>
          {word[0]}
          <span className="italic">{word.slice(1)} </span>
        </span>
      ))}
    </>
  );
};
