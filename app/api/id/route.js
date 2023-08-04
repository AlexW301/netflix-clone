import { NextResponse } from 'next/server'

export async function GET(request) {
    console.log(request.url.split('i?')[1])

    return NextResponse.json({data: request.url.split('i?')[1]})
}