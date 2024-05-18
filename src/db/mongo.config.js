// const mongoose=require('mongoose');

import mongoose from 'mongoose';

const DB_HOST='localhost'
const DB_PORT=27017
const DB_NAME='ecommerce'

const configConnection={
//    url: DB_CNN ?? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    // url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    url: `mongodb+srv://leguigol:Lancelot1014@cluster0.pz68o51.mongodb.net/`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

export const mongoDBconnection=async()=>{
    try{
        await mongoose.connect(configConnection.url,configConnection.options);
        console.log('=============================');
        console.log(`====URL: ${configConnection.url.substring(0,20)}`);
        console.log('=============================');
        console.log(`====DB: ${DB_NAME}`);

    }catch(error){
        console.log(error);
        throw new Error(error)
    }
}

export {
    configConnection,
}