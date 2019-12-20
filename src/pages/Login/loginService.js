import axios from "axios";
import sheetDBConfig from "../../environment";

const sheetDB_URL = sheetDBConfig.URL_API;

const loginService = {
  getAll: () => {
    axios
      .get(sheetDB_URL)
        .then(res =>{
          return res.data;
        })
  },
  addUser: (newUser) => {
    axios
      .post(sheetDB_URL, {
        data: newUser
      })
      .then(res => {
      });
  },
  searchUser: (userId) => {
  },
  getSortBy: async (sort) => {
    axios
      .get(sheetDB_URL + `?sort_by=${sort}&sort_order=asc`)
      .then(res  => {
        return res.data;
      })
  },
  // getLastId: () => {
  //   const lastObj = this.getSortBy("id").pop();
  //   return lastObj.id;
  // }
};

export default loginService;