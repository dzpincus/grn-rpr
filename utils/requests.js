import useSWR from "swr";

const fetcher = async function (route) {
  return await fetch(route)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })

    .catch((error) => console.error(error));
};

export const getSWR = (path) => {
  const { data, error } = useSWR(path, fetcher);

  return { data, error };
};
