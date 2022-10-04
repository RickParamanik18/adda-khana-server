const userService = require("../../services/user.service");

const addUser = async (req, res) => {
  const bodyParams = req.body;
  const result = await userService.addUser(bodyParams);
  res.send(result);
};

const authUser = async (req, res) => {
  const bodyParams = req.body;
  const result = await userService.authUser(bodyParams);
  res.send(result);
};

const getUser = async (req, res) => {
  const queryParams = req.query;
  const result = await userService.getUser(queryParams);
  res.send(result);
};

const getUsers = async (req, res) => {
  const queryParams = req.query;
  const result = await userService.getUsers(queryParams);
  res.send(result);
};

module.exports = { addUser, authUser, getUser, getUsers };
