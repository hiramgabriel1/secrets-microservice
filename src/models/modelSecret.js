import mongoose from "mongoose";
import validator from "validator";

const modelSecret = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: [60, "el titulo no puede superar los 60 caracteres"],
      validate: {
        validator: (value) => {
          return validator.isLength(value, { max: 60 });
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

modelSecret.index({ title: "text" });
const secret = new mongoose.model("Secret", modelSecret);

export default secret;
