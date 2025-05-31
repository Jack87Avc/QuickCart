import moongoose from "moongoose";

let cached = global.moongoose

if(!cached)
{
    cached = global.moongoose = {conn: null,promise: null}
}

async function connectDB() 
{
    if(cached.conn)
    {
        return cached.conn
    }
    if(!cached.promise)
    {
        const opts = {
            bufferCommands:false
        }

        cached.promise = mongoose(`${process.env.MONGODB_URI}/quickcart`,opts).then(mongoose=>{})
            return mongoose
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default connectDB