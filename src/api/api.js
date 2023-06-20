import axios from "axios"

export const API_KEY = 'd2d0dc24-cb8f-4d93-acca-55a975291bc0'

export const getAllPremieres = async (year, month) => {
    const resp = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }, 
    })
    return resp.data
}