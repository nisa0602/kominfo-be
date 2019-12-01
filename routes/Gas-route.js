const express = require('express');
const router = express.Router();
const Gas = require('../models/Gas')
const helper = require('./helper')

//List all Gas name
router.get('/', async (req, res) => {
    try {
        const gasses = await Gas.find()
        res.json(gasses)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Post a Gas name
router.post('/', async (req, res) => {
    const gas = new Gas ({
        name: req.body.name,
        price: req.body.price
    })
    try {
        await gas.save()
        res.status(200).json({gas})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

//List a gas type
router.get('/:id', helper, async (req, res) => {
    res.json(gas)
})

//Delete a gas name
router.delete('/:id', helper, async (req, res) => {
    try {
        await res.gas.remove()
        res.json({message: "Gas is deleted"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Update a Gas
router.patch('/:id', helper, async (req, res) => {
    if (req.body.price != null) {
        res.gas.price = req.body.price
    }
    try {
        const updateGas = await res.gas.save()
        res.json({updateGas})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = router