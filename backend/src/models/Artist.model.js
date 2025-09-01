import mongoose from "mongoose";
const artistSchema = new mongoose.Schema({});

export const Artist = mongoose.model("Artist", artistSchema);
