import axios from "axios";

export const makeRequest = (req_type, url, data) => {
  switch (req_type) {
    case "GET":
      return axios
        .get(url)
        .then((res) => {
          console.log("user get data", res);
          return res;
        })
        .catch((err) => {
          console.log(err.message);
          return err.message;
        });
    case "POST":
      return axios
        .post(url, data)
        .then((res) => {
          console.log("user added/updated successfully", res);
          return res;
        })
        .catch((err) => {
          console.log(err.message);
          return err.message;
        });
    case "DELETE":
      return axios
        .delete(url)
        .then((res) => {
          console.log("user deleted successfully", res);
          return res;
        })
        .catch((err) => {
          console.log(err.message);
          return err.message;
        });
    default:
      return;
  }
};
