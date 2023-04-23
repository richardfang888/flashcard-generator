// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import User from '../models/User.js'

/* REGISTER USER */
export const register = async (req, res) => {
    try {
        //grab the user info from registration request
        const {
            firstName,
            lastName,
            email,
            password,
        } = req.body
        
        //encrypt password
        // const salt = await bcrypt.genSalt()
        // const passwordHash = await bcrypt.hash(password, salt)

        //create new User with the encrypted password and other info
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
        })
        
        //save user in database
        const savedUser = await newUser.save()
        console.log('registered')
        console.log(savedUser)
        res.status(201).json(savedUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body  //grab email and password from login request
        const user = await User.findOne({ email: email })  //find user with the matching email
        if (!user) return res.status(400).json({msg: 'User does not exist.'})

        if (password !== user.password) return res.status(400).json({msg: 'Invalid credentials.'})
        
        res.status(200).json({ user })
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}