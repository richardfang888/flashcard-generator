import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import multer from 'multer'
import helmet from 'helmet'
import cors from 'cors'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import studySetRoutes from './routes/studySets.js'
import { verifyToken } from './middleware/auth.js'
import { addStudySet } from './controllers/studySets.js'
import { register } from './controllers/auth.js'

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

/* FILE STORAGE */
//store uploaded files locally 'public/assets'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })

/* DATABASE SETUP */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port:${PORT}`))

    /* ADD MOCK DATA HERE */

}).catch((error) => console.log(`${error} did not connect`))

/* ROUTES WITH FILES */
app.post('/auth/register', register)
app.post('/studyset', verifyToken, addStudySet)

/* ROUTES */
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/studyset', studySetRoutes)