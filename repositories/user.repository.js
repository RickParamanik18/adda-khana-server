const { v4: uuidv4 } = require("uuid");
var jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const { isEmail } = require("../utils/utils");

const addUser = async (params) => {
  const result = await user.findOne({ email: params.email });
  if (Boolean(result))
    return {
      status: 0,
      msg: "You are already a member of Adda-Khana, kindly log-in",
    };

  const userDoc = new user({
    uid: uuidv4(),
    name: params.name,
    email: params.email,
    password: params.password,
  });
  const dbDoc = await userDoc.save();
  const token = jwt.sign({ data: dbDoc }, process.env.JWT_SECRET);

  return {
    status: 1,
    msg: `Congrats!! ${params.name} you are now a member of Adda-Khana`,
    token,
  };
};

const authUser = async (params) => {
  const result = await user.findOne(params);
  const token = jwt.sign({ data: result }, process.env.JWT_SECRET);

  return {
    status: result ? 1 : 0,
    msg: result ? `Welcome ${result.name}` : "Invalid Credentials",
    token,
  };
};

const getUser = async (params) => {
  console.log(params);
  const result = await user.findOne(params);

  return {
    status: result ? 1 : 0,
    data: result,
  };
};

const getUsers = async (params) => {
  const { query } = params;
  const result = isEmail(query)
    ? await user.find({ email: query })
    : await user.find({ name: RegExp(`^${query}`) });

  return {
    status: result ? 1 : 0,
    data: result,
  };
};

module.exports = { addUser, authUser, getUser, getUsers };
