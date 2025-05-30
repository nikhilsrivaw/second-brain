import mongoose, {model, Model , Schema} from "mongoose";

mongoose.connect("mongodb+srv://nikhilksrivastav190:tfvHQ1MtKVjrQkbt@cluster0.e9tc6qj.mongodb.net/brainly")

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});


export  const UserMdodel = model( "User", UserSchema);


const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{ type: mongoose.Types.ObjectId , ref: 'Tag' }],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required : true},
})

const LinlSchema = new Schema({
    hash:String,   
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required : true  , unique:true},
    
})

export const LinkModel = model("Link", LinlSchema);

export const ContentModel = model("Content", ContentSchema);