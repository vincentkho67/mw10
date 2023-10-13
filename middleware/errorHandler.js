const errorHandler = (err, req, res, next) => {
    console.log(err)

    if(err.name == 'paramsError') {
        res.status(400).json({message: "need name and publisher params"})
    } else {
        res.status(500).json({message: "internal server error"})
    }

}

module.exports = errorHandler;