import {Schema} from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
    img: {
    type: String,
  },
  savedPost:{
    type:[String],
    default: [],
  }
}, {timestamps: true});


export default mongoose.model("Post", postSchema);