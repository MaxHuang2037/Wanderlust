import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../schemas/userSchema.js"

export const signIn = async (req, res) => {
    const {email, password, picture} = req.body
    try {
        let existingUser = await User.findOne({email})

        if(!existingUser && !picture) return res.status(404).json({message: "user dosen't exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: "1hr"})

        res.status(200).json({result: existingUser, token})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export const signUp = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body
    try {
        const existingUser = await User.findOne({email})

        if(existingUser) return res.status(400).json({message: "User already exists."})

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
        const token = jwt.sign({email: result.email, id: result._id}, process.env.JWT_SECRET, {expiresIn: "1hr"})

        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}

export const editProfile = async (req, res) => {
    const UID = req.userId
    const body = req.body

    if(UID === undefined) return res.json({message: "Unauthenticated"})

    try {
        const post = await User.findOneAndUpdate({_id: UID}, body, {new: true})
        res.status(200).json(post)
    } catch(err) {
        res.status(404).json({message: err.message})
    }
}

export const updateTrips = async (req, res) => {
    const new_trips = req.body
    const UID = req.userId
    console.log(new_trips)
    try{
        const {trips} = await User.findOneAndUpdate({_id: UID}, {trips: new_trips}, {new: true})
        res.status(200).json(trips)
    } catch (err){
        res.status(401).json({message: err.message})
        // console.log(err.message)
    }
}

export const getTrips = async (req, res) => {
    const UID = req.userId
    try{
        const {trips} = await User.findOne({_id: UID})
        console.log(trips)
        res.status(200).json(trips)
    } catch(err) {
        res.status(404).json({message: err.message})
        // console.log(err.message)
    }
}