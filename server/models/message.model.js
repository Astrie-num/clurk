const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        text: {
            type: String,
            required: true,
            
        }
    },
    users: Array,
    sender: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    }
},
    {
    timestamps:true
}
)

const Message = mongoose.model('messages', messageSchema)
module.exports = Message;