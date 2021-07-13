import { NextApiRequest,NextApiResponse } from "next";
import {experiences} from "../../data"
export default (req:NextApiRequest,res:NextApiResponse) => {
        
    //by default get Request
    res.status(200).json({ experiences })

}