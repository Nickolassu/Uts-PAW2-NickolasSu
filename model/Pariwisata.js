const mongoose = require("mongoose");

const PariwisataSchema = new mongoose.Schema({
    nama : {type: String,required : true},
    Lokasi : {type: String, required : true},
    suasana : {type : String , required: true}
});

module.exports=mongoose.model("Pariwisata",PariwisataSchema);