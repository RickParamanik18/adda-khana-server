const isEmail = (str) => {
  return str.includes("@") && str.includes(".");
};

module.exports = { isEmail };
