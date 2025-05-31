import moongoose from "moongoose";
import { useUser } from '@clerk/nextjs';
   
const userSchema = new mongoose.shema
({
    _id:{type: String,required: true},
    name:{type: String,required: true},
    email:{type: String,required: true,unique:true},
    imageUrl:{type: String,required: true},
    cartItems:{type: Object,default: {}}
},{minimize: false})

const User = mongoose.models.user||mongoose.model('user',userSchema)

export default User