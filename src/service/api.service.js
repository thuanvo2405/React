import axios from "./axios.customize"
const updateUserAPI = () => {

}

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
    }
    const config = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzMyMTY2Yzc1YTVjODcyNGIxZmIwNTYiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzE3MjYwMjgsImV4cCI6MTczMTc2MjAyOH0.X-DAaiWGGJDnVYZBiMsSbsFw8UQ1q-ut8BoLywQLieo` } };
    return axios.post(URL_BACKEND, data, config);
}

export {
    createUserAPI,
    updateUserAPI
}