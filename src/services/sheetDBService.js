import axios from "axios";
import environment from "../environment";

const sheetDB_URL = environment.sheetDBConfig.URL_API;

const sheetDBService = {
  getAll: () => {
    axios
      .get(sheetDB_URL)
        .then(res =>{
          return res.data;
        })
  },
  add: (newUser) => {
    console.log("pre-posting new user");
    axios
      .post(sheetDB_URL, {
        data: newUser
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  },
  searchById: (userId) => {
    console.log(userId)
  },
  getSortBy: async (sort) => {
    axios
      .get(sheetDB_URL + `?sort_by=${sort}&sort_order=asc`)
      .then(res  => {
        return res.data;
      })
  },
};

export default sheetDBService;