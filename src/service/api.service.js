import axios from "./axios.customize"
const config = { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5IiwiZnVsbE5hbWUiOiJJJ20gQWRtaW4iLCJyb2xlIjoiQURNSU4iLCJzdWIiOiI2NzM4NTBjYTZkMGE5ZjlhZWIzMDUxNTIiLCJhdmF0YXIiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMy5wbmciLCJpYXQiOjE3MzIwMDE3NzksImV4cCI6MTczMjAzNzc3OX0.nhpf9JFWGTM2OdHakYweEy_5S94d_xvMXkgxQlDtvT8` } };

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone,
    }
    return axios.put(URL_BACKEND, data, config);
}

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone,
    }
    return axios.post(URL_BACKEND, data, config);
}


const deleteUserAPI = (_id) => {
    const URL_BACKEND = `/api/v1/user/${_id}`;
    return axios.delete(URL_BACKEND, config);
}


const fetchAllUser = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND, config);
}

export {
    createUserAPI,
    updateUserAPI,
    fetchAllUser,
    deleteUserAPI
}