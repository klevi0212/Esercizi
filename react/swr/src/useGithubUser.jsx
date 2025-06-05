// Modify the useGithubUser custom hook from the third Custom Hooks exercise to use the useSWR hook to fetch the data of a Github user.
// Modify the useGithubUser hook so that, if the username is null, no request is made.
// Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.
// Use SWRConfig to set a default value for the fetcher prop of the useSWR hook.

import useSWR from "swr";
import { mutate } from "swr";
// const fetcher = (url) => fetch(url).then((response) => response.json());
export default function useGithubUser(username) {
  const { data, error, isLoading } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
    // fetcher
  );
  function handleRefreshUsers() {
    mutate();
  }
  return { user: data, error, isLoading, onRefresh: handleRefreshUsers };
}
