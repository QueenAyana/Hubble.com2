import axios from "axios";

export default {
  // Gets all Questions
  getQuestions: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users" + id);
  },
  getHobbies: function() {
    return axios.get("/api/users");
  },
  deleteUser: function(id){
      return axios.delete("/api/users" + id)
  },
  saveUser: function(userData){
      return axios.post("/api/users", userData)
  },
  savePersonality: function(userData){
      return axios.put("/api/users", userData)
  },
//   delete specific hobby from list
};