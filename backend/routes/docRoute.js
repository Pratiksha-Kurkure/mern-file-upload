const { addDocController, getAllDocController } = require("../controller/docController")

const router = require("express").Router()

router
    .post("/add", addDocController)
    .get("/", getAllDocController)
module.exports = router