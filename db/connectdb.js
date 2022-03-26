import mongoose from "mongoose"

const connectdb= async (url)=>{

    try {
        const option={
            dbname:'schooldb',
        };
        await mongoose.connect(url,option);
        console.log("connected");
    } catch (error) {
        
    }
}

export {connectdb};