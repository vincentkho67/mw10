const GameRepository = require("../repositories/gameRepository");

class GameService {
    static get_all_games = async (next) => {

        try {
            const data = GameRepository.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = GameService;