import { NextRequest, NextResponse } from "next/server";


export default function form(req : NextRequest,res : NextResponse){

    return new NextResponse(null, {status : 200})

}