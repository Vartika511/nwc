// api to fetch data for registering in upcoming events

import { promises as fs } from 'fs';

export default async function handler(req, res) {

  try {

    const response = await fs.readFile("./data/register.json","utf-8");
    const data =  JSON.parse(response);
    
   return res.status(200).json({ data: data });
  }
  catch(error){
    console.error(error);
  }
}