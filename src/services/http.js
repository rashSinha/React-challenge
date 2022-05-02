import axios from "axios";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
  }

  return Promise.reject(error);
});

function setAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default {
  get: axios.get,
  post: axios.post,
  setAuthToken,
};
