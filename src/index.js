
import connectDb from './db/db.js'

// require('dotenv').config({path: './env'})

// import {} from 'dotenv/config'

import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

// dotenv.config()

connectDb()











/*
import express from 'express'
const app = express()

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:" ,error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listning on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error : ",error)
        throw error
    }
})()
*/