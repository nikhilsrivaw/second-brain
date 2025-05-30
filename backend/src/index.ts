
import express from 'express';
import { ContentModel, LinkModel, UserMdodel } from './db';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';
import { random } from './utils';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());



app.post('/api/v1/signup' , async (req,res)=>{
    console.log(req.body);

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
        console.log(e);
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
app.post('/api/v1/content' ,userMiddleware , (req,res)=>{
   
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
app.get('/api/v1/content' ,userMiddleware, async (req,res)=>{
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId:userId
    }).populate("userId", "username")
    res.json({
        content
    })


})
app.delete('/api/v1/content' ,userMiddleware, async (req,res)=>{
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

app.post('/api/v1/brain/share' , userMiddleware, async (req,res)=>{
    const share = req.body.share 
    if(share){
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if(existingLink){
            res.json({
                hash: existingLink.hash,
            })
        
            return;
        }
        const hash = random(10);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            //@ts-ignore
            hash:hash
        })

        res.json({
            message:'/share/' + hash
        })
    }else{
       await  LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
    }

    res.json({
        message : "Rreemoved link"
    })

})
app.get('/api/v1/brain/:shareLink' ,async (req,res)=>{
    const hash = req.params.shareLink;
    const Link = await LinkModel.findOne({
        hash
    });
    if(!Link){
        res.status(411).json({
            message:"Sorry Incorrect Input"
        })
        return;
    }
    const content = await ContentModel.find({
        //@ts-ignore
        userId: Link.userId
    })
    const user = await UserMdodel.findOne({
         //@ts-ignore
        _id: Link.userId

    })
    res.json({
        username:user?.username,
        content 
    })

})

app.listen(3000 , ()=>{
    console.log('Server is running on port 3000');
})