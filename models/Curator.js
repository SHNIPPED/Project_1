const {Schema, model} = require('mongoose')

const schema = new Schema({
    Lastname:{
        type: String,
        required: true,
    },
    Name:{
        type: String,
        required: true,
    },
    Surname:{
        type: String,
        required: true,
    },
})
module.exports = model('Curator',schema)