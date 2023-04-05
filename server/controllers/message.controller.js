const Message = require("../models/message.model")

const addMessage = async (req, res) => {
    try {

        let { from, to, message } = req.body

        if (!from || !to || !message) return res.status(400).json({ status: false, message: 'sender, receiver and message are required' })

        let newMsg = new Message({
            message: { text: message },
            users: [from, to],
            sender: from
        })

        await newMsg.save()

        if (newMsg) return res.status(201).json({ status: true, message: 'new message was added successfully' })

        return res.status(204).json({ status: false, message: 'message was not created successfully' })
    } catch (err) {
        console.log('error creating message', err.message);
        return res.status(500).json({ status: false, message: 'server error' })
    }
}

const getMessages = async (req, res) => {
    try {
        let { from, to } = req.body
        if (!from || !to) return res.status(400).json({ status: false, message: 'sender and receiver are required' })

        let allMessages = await Message.find()

        let messages = allMessages.filter(message => message.users.includes(from) && message.users.includes(to))
        if (messages != "" && messages != []) {
            let projectMessages = messages.map(msg => {
                return {
                    fromSelf: msg.sender.toString() === from,
                    message: msg.message.text,
                    time: msg.createdAt
                }
            })
            return res.status(200).json({ status: true, messages:projectMessages })
        }
        return res.status(200).json({ status: false, message: 'no messages were found', })

    } catch (err) {
        console.log('error getting messages:', err.message);
        return res.status(500).json({ status: false, message: 'server error' })
    }
}

module.exports = {
    addMessage,
    getMessages
}