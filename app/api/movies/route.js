import { NextResponse } from 'next/server'

export async function GET(request) {
    const requestURL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&${request.url.split('?')[1]}`

    const response = await fetch(requestURL)
    const data = await response.json()
    return NextResponse.json(data)
}