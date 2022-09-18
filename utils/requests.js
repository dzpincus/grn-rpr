import useSWR from "swr";

const fetcher = async function (route) {
  // props.setPostsLoading(true);
  return await fetch(route)
    .then((res) => res.json())
    .then((data) => {
      // props.setPostsLoading(false);
      console.log(data);
      return data;
    })

    .catch((error) => console.error(error));
};

export const useGetPosts = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const { data: posts, error } = useSWR(path, fetcher);

  return { posts, error };
};
