import useSWR from "swr";

const fetcher = async function (route) {
  return await fetch(route)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })

    .catch((error) => console.error(error));
};

export const getPosts = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const { data: posts, error } = useSWR(path, fetcher);

  return { posts, error };
};
