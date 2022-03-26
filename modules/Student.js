import mongoose from "mongoose"

// Defing schema
const studentSchema=new mongoose.Schema({
  name:{type:String, required:true, trim:true},
  age:{type:Number, required:true, min:18, max:60},
  address:{type:String, required:true, trim:true},
})

// Model = collection=table

const studentModel=mongoose.model('Student', studentSchema);

export default studentModel;
