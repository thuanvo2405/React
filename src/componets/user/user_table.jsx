import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../service/api.service';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full name',
            dataIndex: 'full name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUser();
        setDataUsers(res.data);
    }
    return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
};
export default UserTable;