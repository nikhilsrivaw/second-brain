import mongoose, {model, Model , Schema} from "mongoose";

mongoose.connect("mongodb+srv://nikhilksrivastav190:tfvHQ1MtKVjrQkbt@cluster0.e9tc6qj.mongodb.net/brainly")

const UserSchema = new Schema({
    username: {type :String , unique : true},
    password : String,

})

export  const UserMdodel = model( "User", UserSchema);


const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{ type: mongoose.Types.ObjectId , ref: 'Tag' }],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required : true},
})

export const ContentModel = model("Content", ContentSchema);