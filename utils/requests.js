import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import useSWR from "swr";

const fetcher = async function (route) {
  const res = await fetch(route);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const getSWR = (path) => {
  const { data, error } = useSWR(path, fetcher);

  return { data, error };
};
