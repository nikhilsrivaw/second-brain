
import express from 'express';
import { ContentModel, UserMdodel } from './db';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { JWT_PASSWORD } from './config';
import { userMiddlewre } from './middleware';

const app = express();

app.use(express.json());



app.post('/api/v1/signup' , async (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserMdodel.create({
        username: username,
        password: password

    })

    res.json({
        message : 'User Signed Up'
    })
    }  catch(e){
        res.status(411).json({
            message: 'User already exists'
        })
    }

    

})
app.post('/api/v1/signin' ,async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserMdodel.findOne({
          username: username,
          password: password
    })
    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id,
        }, JWT_PASSWORD, )
        res.json({
            token
        })
    }else{
        res.status(403).json({
            message : "invalid credentials"
        })
    }


})
app.post('/api/v1/content' ,userMiddlewre , (req,res)=>{
   
    const type = req.body.type; // 'question' or 'answer'
    const link = req.body.link;
    ContentModel.create({     
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags:[]


    })

     res.json({
        message:'Conetnt added successfully'
    })

})
app.get('/api/v1/content' ,userMiddlewre, async (req,res)=>{
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId:userId
    }).populate("userId", "username")
    res.json({
        content
    })


})
app.delete('/api/v1/content' ,userMiddlewre, async (req,res)=>{
      const contentId = req.body.contentId;
      await ContentModel.deleteMany({
          contentId,
          //@ts-ignore
        userId : req.userId

  })
        res.json({
            message: 'Content deleted successfully'
        })
})  

app.post('/api/v1/share' , (req,res)=>{

})
app.get('/api/v1/signup' , (req,res)=>{

})

app.listen(3000 , ()=>{
    console.log('Server is running on port 3000');
})