import axios from "axios";
import { NextResponse } from "next/server"
import { z } from "zod";

const bodySchema = z.object({
    name: z.string(),
    phone: z.string(),
    message: z.string()
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request:Request) {
    try {
        const body = await request.json()
        const { name, phone, message} = bodySchema.parse(body)

        const messageData = {
            embeds:
            [
                {
                    // "id": 107590103,
                    "title": "Mensagem de Contato",
                    "description": message,
                    "fields": [
                        {
                        "id": 668006213,
                        "name": "Nome",
                        "value": name,
                        "inline": true
                        },
                        {
                        "id": 486428737,
                        "name": "WhatsApp",
                        "value": phone,
                        "inline": true
                        }
                    ]
                }
            ],
        }

        await axios.post(WEBHOOK_URL, messageData)
        
        return NextResponse.json({
            message: 'Mensagem enviada'
        })
    } catch(err) {
        console.error(err)
        return NextResponse.error()
    }
}