import axios  from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDZkN2FjZmU4MzNmYmMyMDY3Nzc2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjQxMjQxNSwiZXhwIjoxNzEyNjcxNjE1fQ.rNQ7W4qbsfB1Amq1cpodZaZ14U9h_axyQ5d6WhbyfSQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})