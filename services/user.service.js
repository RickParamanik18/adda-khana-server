const userRepository = require("../repositories/user.repository");

const addUser = async (params) => {
  const result = await userRepository.addUser(params);
  return result;
};
const authUser = async (params) => {
  const result = await userRepository.authUser(params);
  return result;
};
const getUser = async (params) => {
  const result = await userRepository.getUser(params);
  return result;
};

const getUsers = async (params) => {
  const result = await userRepository.getUsers(params);
  return result;
};

module.exports = { addUser, authUser, getUser, getUsers };
