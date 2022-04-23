const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routes/auth')

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://PTPMTN:1234@ptpmtn.xtwtw.mongodb.net/PTPMTN?retryWrites=true&w=majority"
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)


const PORT = 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
