const {Schema, model} = require('mongoose')

const schema = new Schema({
    Name:{
        type: String,
        required: true
    },
    Date_Start:{
        type: Date,
        required: true
    },
    Date_End:{
        type: Date,
        required: true
    },
    Note:{
        type:[String],
        default: undefined
    },
    Photo:{
        type:[String],
        default: undefined
    },
    Curator:{
        type:[String],
        default: undefined
    },
    Students:{
        type: [String],
        require: true
    },
})
module.exports = model('Project',schema)