import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY)

    res.cookie("jwt", token);
};

export default generateTokenAndSetCookie;