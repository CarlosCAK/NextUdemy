import { NextApiRequest, NextApiResponse } from "next"

type data = {
    metodo:String
}

export default (req : NextApiRequest,res : NextApiResponse<data>) => {
    res.status(200).json({
        metodo: req.method || "deu ruim"
    })
}