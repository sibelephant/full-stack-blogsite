import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    slug: {
      type:String,
      required:true,
      unique:true,
    },
    savedPost: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
