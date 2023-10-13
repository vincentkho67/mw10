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

    static getGameById = async (id, next) => {
        const query = `SELECT * FROM games WHERE id = $1;` // $1 itu placeholder

        try {
            const data = await pool.query(query, [id])

            if (data.rows.length === 0) {
                return null
            }

            return data.rows[0]
        } catch(err) {
            next(err)
        }
    }

    static createGame = async(gameData, next) => {
        const {name, publisher} = gameData

        if(!name || !publisher) {
            return next({
                name: "paramsError"
            })
        }

        const query = `INSERT INTO games (name, publisher) VALUES ($1, $2);`

        try {
            const data = await pool.query(query, [name, publisher])

            return data.rows[0];
        } catch{
            next(err)
        }

    }

    static update = async(id, gameData, next) => {
        const {name, publisher} = gameData

        if(!name || !publisher) {
            return next({
                name: "paramsError"
            })
        }

        const query = `
          UPDATE games 
          SET name = $1, 
          publisher = $2 
          WHERE id = $3;
        `
        try {
            const data = await pool.query(query, [name, publisher, id])
            return data.rows[0]
        } catch(err) {
            next(err)
        }
    }

    static delete = async(id, next) => {
        const query = `DELETE FROM games WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }
};

module.exports = Game;
