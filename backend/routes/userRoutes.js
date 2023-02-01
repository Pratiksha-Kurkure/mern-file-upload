const { addAvatar, getAllAvatars, addToGallery, getAllUsers, destroyUsers } = require("../controller/userController")

const router = require("express").Router()

router
    .get("/", getAllAvatars)
    .get("/fetch", getAllUsers)
    .delete("/destroy", destroyUsers)
    .post("/add", addAvatar)
    .post("/add-to-gallery", addToGallery)
module.exports = router