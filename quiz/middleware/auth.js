import jwt from "jsonwebtoken"

export const verifyToken = (request, response, next) => {
    const token = request.body.token || request.query.token || request.headers["x-access-token"];
    if (!token) {
        return response.status(403).json( { success: false, message: "Token oruul" } )
    }
    try {
        const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
        request.user = decoded;
    } catch (err) {
        return response.status(401).json({ success: false, message: "token buruu" })
    }
    return next();
}