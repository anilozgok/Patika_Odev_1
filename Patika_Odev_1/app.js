import axios from "axios";

export const getData = async (user_id) => {
  const res = await Promise.all([
    axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id).then(
      (data) => data.data
    ),
    axios("https://jsonplaceholder.typicode.com/users/" + user_id).then(
      (data) => data.data
    ),
  ]);
  return res;
};
