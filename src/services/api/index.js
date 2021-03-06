import apisauce from "apisauce";

const apiUrl = "https://api.github.com/search/";

const create = (baseURL = apiUrl) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      // 'Cache-Control': 'no-cache',
      // 'Cache-Control': 'no-cache',
      // 'Content-Type': 'application/json'
    },
    // withCredentials: true,
    timeout: 5000
  });

  const getReposFromGithub = queryStr => api.get(`repositories?${queryStr}`);

  return {
    getReposFromGithub
  };
};

const api = create();

export default api;
