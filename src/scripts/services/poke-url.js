import { url } from "../variables"

async function getPokeUrl() {
    const response = await fetch(url)
    return await response.json()
}

async function getPokeUrlNext(nextUrl) {
    const response = await fetch(nextUrl)
    return await response.json()
}

export { getPokeUrl, getPokeUrlNext }