import { NextApiRequest, NextApiResponse } from "next";

interface data {
    id : string,
    enunciado : string ,
    resposta : string[]
}

export default function questao(req : NextApiRequest, res: NextApiResponse<data|null>){

    if(req.method === "GET"){
        const id = req.query.id

        const questaoId = Array.isArray(id) ? id[0] : id;

        if(questaoId){
        res.status(200).json({
            id : questaoId,
            enunciado : "Qual sua cor favorita",
            resposta:[
                'Branca',
                'Vermelha',
                'Amarela',
                'Verde'
            ]
        })
     }
    }else{
        res.status(405).send(null);
    }

}