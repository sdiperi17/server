const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

//To create Model Class/Schema we pass 2 argument into => mongoose.model("collectionName")
//loads model into mongoose that creates model class
mongoose.model("users", userSchema);
