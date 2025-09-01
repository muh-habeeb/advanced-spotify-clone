import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";
import { Artist } from "../models/Artist.model.js";

export const getStatus = async (req, res, next) => {
  try {
    // const totalSongs = await Song.countDocuments();
    // const totalUser = await User.countDocuments();
    // const totalAlbum = await Album.countDocuments();
    // const totalArtist = await Artist.countDocuments();
    const [totalAlbum, totalArtist, totalSongs, totalUser, uniqueArtists] =
      await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),
        Artist.countDocuments(),

        // unique artists
        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          {
            $group: { _id: "$artist" },
          },
          {
            $count: "count",
          },
        ]),
      ]);

    return res.status(200).json({
      success: true,
      totalAlbum,
      totalSongs,
      totalUser,
      totalArtist: uniqueArtists[0]?.count || 0,
    });
  } catch (error) {
    next(error);
  }
};
