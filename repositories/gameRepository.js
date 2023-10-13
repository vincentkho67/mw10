const Game = require("../model/game");

class GameRepository {

    static all = async (next) => {
        try {
          const data = await Game.getGames(next);
          return data;
        } catch(err) {
            next(err);
        } 
    }
}

module.exports = GameRepository;