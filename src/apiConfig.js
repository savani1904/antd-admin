// apiConfig.js

const apiConfig = {
    queryRouteList: "/routes",
    queryUserInfo: "/user",
    queryUser: "/user/:id",
    queryUserList: "/users",
    queryPostList: "/posts",
    queryDashboard: "/dashboard",
    loginUser: "POST /user/login",
    updateUser: "PATCH /user/:id",
    createUser: "POST /user",
    removeUser: "DELETE /user/:id",
    removeUserList: "POST /users/delete"
  };
  
  export default apiConfig;