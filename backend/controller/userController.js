const { avatarUpload, galleryUpload } = require("../utils/upload")
const user = require("./../models/User")

exports.addAvatar = async (req, res) => {
    console.log("XXX");
    try {
        avatarUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }
            console.log(req.body);
            // console.log(req.files);
            console.log(req.file.filename);
            const result = await user.create({
                ...req.body,
                profile: `profile/${req.file.filename}`
            })
            res.json({
                success: true,
                message: "avatar add successfully"
            })
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}

exports.getAllAvatars = async (req, res) => {
    console.log("XXX");
    try {

        const result = await user.find()
        res.json({
            success: true,
            message: "avatar fetched successfully",
            result
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {

        const result = await user.find()
        res.json({
            success: true,
            message: "users fetched successfully",
            result
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}

exports.destroyUsers = async (req, res) => {
    try {

        const result = await user.deleteMany()
        res.json({
            success: true,
            message: " All users deleted successfully",
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}

exports.addToGallery = async (req, res) => {
    console.log("XXX");
    try {
        galleryUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }
            console.log(req.body);
            console.log(req.files);
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)
            }
            console.log(d);
            const result = await user.create({
                ...req.body,
                docs: d
            })
            res.json({
                success: true,
                message: "docs add successfully"
            })
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}