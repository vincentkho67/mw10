const Game = require("../model/game")

class GameController {
    static index = async(req, res, next) => {

        try {
            const data = await Game.getGames(next)
            res.status(200).json(data)
        }catch(err) {
            next(err)
        }
    }

}

module.exports = GameController;