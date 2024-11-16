import UserTable from '../componets/user/user_table';
import UserForm from '../componets/user/user_form';
import React, { useEffect, useState } from 'react';
import { fetchAllUser } from '../service/api.service';


const userPage = () => {
    const [dataUsers, setDataUsers] = useState([]);


    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUser();
        setDataUsers(res.data);
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} loadUser={loadUser} />
        </div>);
}

export default userPage;