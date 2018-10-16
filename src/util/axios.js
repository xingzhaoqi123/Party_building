import axios from "axios";
const baseUrl = "http://211.67.177.56:8080/hhdj";
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000
});
const fetch = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params: data }, config)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  axios(url, data, config, methods) {
    return new Promise((resolve, reject) => {
      instance[methods](url, data, config)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  put(url, data, config) {
    return this.axios(url, data, config, "put");
  }
};
export default fetch;
