import { Song } from "../../lib/model/song.model.js"; //importing song model
import { Album } from "../../lib/model/album.model.js"; //importing album model
import cloudinary from "../../lib/cloudinary.js"; // for cloudinary uploads

//helper fun for cloudinary

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.UploadStream.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url; // return the secure URL of the uploaded file
  } catch (error) {
    console.log("Error uploading to Cloudinary:", error);
    throw new error("error uploading in to cloudinary");
  }
};


const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || req.files.imageFile) {
      return res.status(400).send("All files are required");
    }
    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;
    const audioUrl = await uploadToCloudinary(audioFile);
    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });
    await song.save();
    // if song belongs to an album ,update the album's array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      });
    }
    res.status(201).json(song);
  } catch (error) {
    //  res.status(500).json({ message: "song creation failed ",});
    console.error("Error creating song:", error);
    next(error);
  }
};



const deleteSong = async (req, res, next) => {
  try {
    const id = req.params;
    const song = await Song.findById(id);
    //if the song belongs to an album, update teh album array

    if (song.albumId) {
      await Album.findByIdAndDelete(song.albumId, {
        $pull: { song: song._id },
      });
    }
    await Song.findByIdAndDelete(id);
    res.status(200).json({ message: "song deleted successfully" });
  } catch (error) {
    console.error("Error creating song:", error);
    next(error);
  }
};



const createAlbum = async (req, res, next) => {
  try {
    const { title, artist, releaseYear } = req.body;
    const { imageFile } = req.files;
    const imageUrl = await uploadToCloudinary(imageFile);
    const album = new Album({
      title,
      artist,
      imageUrl,
      releaseYear,
    });
    await Album.save();
    res.status(201).json(album);
  } catch (error) {
    console.log(error);
    next(error);
  }
};


const deleteAlbum = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Song.deleteMany({ albumId: id });
    await Album.findByIdAndDelete(id);
    res.status(200).json({ message: "Album deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error)
    
  }
};

const checkAdmin=async(req,res,next)=>{
  try {
    res.status(200).json({admin:true})
  } catch (error) {
    next(error)
  }
}

export { createSong, deleteSong, createAlbum, deleteAlbum ,checkAdmin};
