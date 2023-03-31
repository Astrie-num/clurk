const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email is already registered'],
        minlength: [5, 'email must be at least 5 characters'],
        maxlength: [50, 'email must be at most 50 characters'],
    },
    firstName: {
        type: String,
        required: [true, 'first name is required'],
        minlength: [3, 'first name must be at least 3 characters'],
        maxlength: [20, 'first name must be at most 50 characters'],
    },
    lastName: {
        type: String,
        required: [true, 'first name is required'],
        minlength: [3, 'first name must be at least 3 characters'],
        maxlength: [20, 'first name must be at most 50 characters'],
    },
    birthDate: {
        type: Date,
        required: [true, 'birthdate is required']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must be at least 6 characters'],
        maxlength: [65, 'password must be at most 65 characters'],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'custom'],
        default: 'custom'
    }
},
    {
        timestamps: true
    }
)


userSchema.pre('save', async function () {
    try {

        let hashedPwd = await bcrypt.hash(this.password, 10)
        this.password = hashedPwd

    } catch (err) {

        console.log('error hashing password', err.message, err.code);
    }
})


const User = mongoose.model('users', userSchema)

module.exports = User