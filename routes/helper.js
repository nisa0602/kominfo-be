const Gas = require('../models/Gas')

async function getGas(req, res, next) {
    try {
        gas = await Gas.findById(req.params.id)
        if (gas == null) {
            return res.status(404).json({message: "Gas is not found"})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.gas = gas
    next()
}

module.exports = getGas