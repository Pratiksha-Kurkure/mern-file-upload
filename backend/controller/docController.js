const { multiDocsUpload } = require("../utils/upload")
const multiDocs = require("./../models/Doc")

exports.addDocController = async (req, res) => {
    try {
        multiDocsUpload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "multer error" + err
                })
            }
            // console.log(req.files.dob[0].filename);
            // console.log(req.files.adhar[0].filename);

            if (req.files.dob) {
                req.body.userDob = `dob/${req.files.dob[0].filename}`
            }
            if (req.files.adhar) {
                req.body.userAdhar = `adhar/${req.files.adhar[0].filename}`
            }
            if (req.files.tc) {
                req.body.userTc = `tc/${req.files.tc[0].filename}`
            }
            // console.log(req.body)
            // console.log(req.files);
            const result = await multiDocs.create(req.body)
            res.json({
                success: true,
                message: "Doc uploaded successfully"
            })
        })
    } catch (error) {
        res.status(400).json({
            success: true,
            message: "Error" + error
        })
    }
}
exports.getAllDocController = async (req, res) => {
    try {
        const result = await multiDocs.find()
        res.json({
            success: true,
            message: "Doc fetched successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })
    }
}