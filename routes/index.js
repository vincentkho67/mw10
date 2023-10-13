const express = require('express')
const router = express.Router()
const gameRouter = require("./game")

router.use("/games", gameRouter)

module.exports = router;