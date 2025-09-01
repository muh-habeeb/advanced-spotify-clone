import { Song } from "../models/song.model.js";

// all functions are same .modify for your wish for better recomputation
export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    return res.json({ success: true, songs });
  } catch (error) {
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    //fetch 6 random song using mongo db aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    return res.status(200).json({ success: true, songs });
  } catch (error) {
    next(error);
  }
};
export const getMadeForYou = async (req, res, next) => {
  try {
    //fetch 4 random song using mongo db aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);

    return res.status(200).json({ success: true, songs });
  } catch (error) {
    next(error);
  }
};

export const getTrending = async (req, res, next) => {
  try {
    //fetch 4 random song using mongo db aggregation pipeline
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        }, 
      },
    ]);

    return res.status(200).json({ success: true, songs });
  } catch (error) {
    next(error);
  }
};
