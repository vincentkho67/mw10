const pool = require("../config/config")

class Game {
    //function itu jadi method kalo didalem Class
    static getGames = async (next) => {
        const findQuery = `SELECT * FROM games`

        try {
          const data = await pool.query(findQuery)

          return data.rows
        } catch(err) {
            next(err)
        }
    }
};

module.exports = Game;
