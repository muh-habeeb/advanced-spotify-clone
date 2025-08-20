import { User } from "../lib/model/user.model.js";

const userRegistrationCallback = async (req, res,next) => {
  try {
    //get data from body
    const { id, firstName, lastName, imageUrl } = req.body;

    //check if user exist
    const user = await User.findOne({ clerkId: id });
    console.table(user);

    //sign up
    if (!user) {
      await User.create({
        clerkId: id,
        firstName,
        imageUrl,
      });
    }
    return res.status(201).json({ message: "User Created", Id: id });
  } catch (error) {
    // return res
    //   .status(500)
    //   .json({ message: "Registration failed", error: error.message });
    next(error)
  }
};

const userLogin = async (req, res) => {
  res.send("Auth route log in   ");
};

export { userRegistrationCallback, userLogin };
