export const getUserForSideBar = async (req, res) => {
    try { 

        const loggedInUser = req.user._id;

        const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
            "fullName username profilePic"
        );

    } catch (error) {
        console.log("Error in getUserForSideBar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};