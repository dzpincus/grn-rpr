export const formatDate = function (dateString, withPrep) {
  const d = new Date(dateString);
  const today = new Date();
  let value;
  if (d.toDateString() === today.toDateString()) {
    const time = d.toLocaleTimeString("lookup", {
      dataStyle: "short",
      timeStyle: "short",
    });
    if (withPrep) {
      return `today at ${time}`;
    }
    return `${time}`;
  }
  const date = d.toLocaleString("lookup", {
    dataStyle: "short",
    timeStyle: "short",
  });
  if (withPrep) {
    return `on ${date}`;
  }
  return date;
};
