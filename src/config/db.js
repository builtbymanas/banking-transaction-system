const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(`Error connecting to MongoDB`)
        process.exit(1)
    }
}

module.exports = connectToDB