import { Table } from "antd";
import { useState } from "react";
import { deleteUserAPI } from "../../service/api.service";
import UpdateUserModal from './update_user';
import GetUserModal from "./get_info";


const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState(false);
    const [isModalGetInfo, setIsModalGetInfo] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const handleDeleteClick = async (id) => {
        const res = await deleteUserAPI(id);
        setDataUpdate(res);
        loadUser();
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a onClick={() => {
                        setIsModalGetInfo(true);
                        setDataUpdate(record);
                    }}>{record._id}</a>
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
                        loadUser();
                    }}
                    >Update</a>
                    <a onClick={() => {
                        handleDeleteClick(record._id);
                        console.log(record._id);
                    }}
                    >Delete</a>
                </div >
            ),
        },
    ];


    return <>
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
        <UpdateUserModal setisModalUpdateOpen={setisModalUpdateOpen} isModalUpdateOpen={isModalUpdateOpen}
            dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} loadUser={loadUser} />
        <GetUserModal setIsModalGetInfo={setIsModalGetInfo} isModalGetInfo={isModalGetInfo}
            dataUpdate={dataUpdate} />
    </>
};
export default UserTable;