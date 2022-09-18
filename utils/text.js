export const titleItalics = function (text) {
  const words = text.split(" ");
  words.forEach((word) => {
    console.log(word);
    console.log(word[0]);
    console.log(word.slice(1));
  });
  return (
    <>
      {words.map((word) => (
        <>
          {word[0]}
          <span className="italic">{word.slice(1)} </span>
        </>
      ))}
    </>
  );
};
