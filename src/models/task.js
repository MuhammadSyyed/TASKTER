const mongoose = require('mongoose')
const taskschema = new mongoose.Schema({
    description : {
        type: String,
        required: true,
        trim: true,
    },
    done : {
        type: Boolean,
        default: false
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }
    
},{
    timestamps: true
})

const Task = mongoose.model('tasks',taskschema)

module.exports = Task