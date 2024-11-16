import { Input, Button, notification, Table, Modal } from "antd";
import UpdateUserModal from './update_user';
import { useState } from "react";

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a href='#'>{record._id}</a>
                    <a>Delete</a>
                </>
            ),
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <a onClick={() => {
                        setisModalUpdateOpen(true);
                        setDataUpdate(record);
                        console.log(record);
                    }}
                    >Update {record.name}</a>
                    <a>Delete</a>
                </div >
            ),
        },
    ];


    return <>
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
        <UpdateUserModal setisModalUpdateOpen={setisModalUpdateOpen} isModalUpdateOpen={isModalUpdateOpen}
            dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} loadUser={loadUser} />
    </>
};
export default UserTable;