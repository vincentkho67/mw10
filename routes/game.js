const express = require('express')
const router = express.Router()
const GameController = require("../controller/gameController")

router.get("/", GameController.index)
router.get("/:id", GameController.show)
router.post("/", GameController.create)
router.put("/:id", GameController.update)
router.delete("/:id", GameController.delete)

module.exports = router;