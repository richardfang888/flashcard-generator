import express from 'express'
import { verifyToken } from '../middleware/auth.js'
import getUser from '../controllers/users.js'

const router = express.Router()

/* READ */
router.get('/:id', verifyToken, getUser)

export default router