import mongoose from 'mongoose';
let cached=global.mongoose
if(!cached){
    cached= global.mongoose={ conn:null, promise:null} 
}

async function connectdb() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(process.env.MONGO_URI, opts).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = mongoose.connect(`${process.env.MONGO_URI}/quickcart`,opts).then(mongoose => {
        return mongoose
    })
    cached.conn = await cached.promise
    return cached.conn  
}

export default connectdb