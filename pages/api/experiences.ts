import { NextApiRequest,NextApiResponse } from "next";
import {experiences} from "../../data"


const experiencesHandler = (req:NextApiRequest,res:NextApiResponse) => {
        
    //by default get Request
    res.status(200).json({ experiences })

}

export default experiencesHandler;