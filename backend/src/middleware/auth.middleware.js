import { clerkClient } from "@clerk/express";
//the user should be logged in
const authorized = async (req, res, next) => {
  if (!req.auth.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  next();
};

// the user is admin and can access admin routes
const authorizedAsAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin = process.env.ADMIN_EMAILS===currentUser.primaryEmailAddress?.emailAddress
    // const isAdmin = process.env.ADMIN_EMAILS.split(",").includes(
    //   currentUser.emailAddresses[0].emailAddress
    // );

    if(!isAdmin) {
       return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking admin status", error: error.message });
  }
};

export {  authorized, authorizedAsAdmin };
