import axios from "axios";
import qs from "qs";

// headers: {
//   'Content-Type': 'application/json',
//   authorization: this.state.token,
// },

const backend_location = "http://10.58.0.176:8000";

const request = ({ method, path, query, headers, data }) => {
  const token = localStorage.getItem("access_token");
  const _headers = {
    ...headers
  };
  if (token) {
    _headers.Authorization = token;
  }
  return axios({
    method,
    url:
      backend_location + path + qs.stringify(query, { addQueryPrefix: true }),
    headers: _headers,
    data
  })
    .then(({ data }) => data)
    .catch(err => {
      console.error(err);
      const error = err.response;
      throw error;
    });
};
export default {
  get: (path, data) =>
    request({
      path,
      method: "get",
      ...data
    }),
  post: (path, data) =>
    request({
      path,
      method: "post",
      ...data
    }),
  put: (path, data) =>
    request({
      path,
      method: "put",
      ...data
    }),
  delete: (path, data) =>
    request({
      path,
      method: "delete",
      ...data
    })
};
