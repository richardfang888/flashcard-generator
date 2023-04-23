import express from 'express'
import { verifyToken } from '../middleware/auth.js'
import getUser from '../controllers/users.js'
import createUser from '../controllers/users.js'

const router = express.Router()

/* READ */
router.get('/:id', getUser)

export default router