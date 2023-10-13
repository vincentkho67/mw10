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

    static show = async(req, res, next) => {
        const id = req.params.id
        try {
            const data = await Game.getGameById(id, next)
            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static create = async(req, res, next) => {
        const gameData = req.body
        
        try {
            const data = await Game.createGame(gameData, next)
            res.status(201).json(data)
        } catch(err) {
            next(err)
        }
    }

    static update = async(req, res, next) => {
        const id = req.params.id
        const gameData = req.body

        try {
            const data = await Game.update(id, gameData, next)

            res.status(200).json(data)
        } catch(err) {
            next(err)
        }
    }

    static delete = async(req, res, next) => {
        const id = req.params.id
        try {
            const data = await Game.delete(id, next)
            res.status(200).json({message: "Game deleted"})
        } catch(err) {
            next(err)
        }
    }

}

module.exports = GameController;