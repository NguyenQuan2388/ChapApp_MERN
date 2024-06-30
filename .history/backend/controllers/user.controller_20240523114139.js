export const getUserForSideBar = async (req, res) => {
    try { 

        const loggedInUser = req.user._id;
        
    } catch (error) {
        console.log("Error in getUserForSideBar controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};