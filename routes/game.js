const express = require('express')
const router = express.Router()
const GameController = require("../controller/gameController")

router.get("/", GameController.index)
// router.get("/:id", GameController.index)
// router.post("/", GameController.index)
// router.put("/", GameController.index)
// router.delete("/:id", GameController.index)

module.exports = router;