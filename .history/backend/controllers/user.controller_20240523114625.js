import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
    try { 

        const loggedInUserId = req.user._id;

        const allUsers = await User.find();

        res.status(200).json(allUsers);

    } catch (error) {
        console.log("Error in getUserForSideBar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};