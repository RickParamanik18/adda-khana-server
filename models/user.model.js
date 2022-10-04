const con = require("../config/mongo.connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: false,
      default:
        "https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
    },
    contacts: {
      type: Object,
      required: false,
      default: [],
    },
    blocked_contacts: {
      type: Object,
      required: false,
      default: [],
    },
  },
  { versionKey: false }
);

module.exports = users = con.model("users", UserSchema);
