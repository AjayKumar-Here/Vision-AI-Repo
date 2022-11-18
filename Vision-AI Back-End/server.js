import express from "express";

import Bcrypt from "bcrypt-nodejs";

import Cors from "cors";

import Knex from 'knex';

import RegisterHandler  from "./Handlers/signup.js";

import SigninHandler  from "./Handlers/signin.js";

import ImageHandler from "./Handlers/image.js";

import ImagePrediction  from "./Handlers/ImagePrediction.js";



const db = Knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : '',
    database : 'Your Postgres Database Name'
  }
});

const app = express();

app.use(express.json());

app.use(Cors());


app.get('/',(req,res)=>{

  res.json('Welcome');
});

app.post('/signin',(req,res)=>{ SigninHandler(req,res,db,Bcrypt)});

app.post('/signup',(req,res) => {RegisterHandler(req,res,db,Bcrypt)});

app.put('/image',(req,res)=>{ImageHandler(req,res,db)});

app.post('/imageurl',(req,res)=>{ImagePrediction(req,res)});


app.listen(3000, () => {  
  console.log(`app is running on port 3000`);
})  
