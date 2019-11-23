import axios from "axios";
import sheetDBConfig from "../../environment";

const sheetDB_URL = sheetDBConfig.URL_API;

const loginService = {
  addUser: (newUser) => {
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
  searchUser: (userId) => {
    console.log(userId)
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