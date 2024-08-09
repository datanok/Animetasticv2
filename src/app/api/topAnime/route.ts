import { NextResponse } from "next/server";

interface data {
    data: Object
}
export const GET = async (request:Request) => {
    try {


        const clientId = process.env.MAL_CLIENT_ID;
        if (!clientId) {
            throw new Error("Missing MAL_CLIENT_ID environment variable");
        }
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
        const res = await fetch('https://api.myanimelist.net/v2/anime/ranking?ranking_type=airing', {
            headers: {
                'X-MAL-CLIENT-ID': clientId,
            }
        });
        console.log(res,"res")

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data: data = await res.json();
        
        return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.log(error)
        return new NextResponse("Failed to fetch top animes", { status: 500 });
    }
};