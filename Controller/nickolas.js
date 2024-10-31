const Pariwisata = require("../model/Pariwisata");
const createPariwisata=(req,res)=> {
    const Pariwisata =new Pariwisata({
        nama :req.body.nama,
        Lokasi: req.body.lokasi,
        suasana: req.body.harga
    });

    console.log(Pariwisata);
    Pariwisata.save().then((createdPariwisata)=>{
        res.status(201).json({
            message :"Data berhasil disimpan",
            PariwisataId : createdPariwisata._id
        });
    });
};
module.exports = {createPariwisata};