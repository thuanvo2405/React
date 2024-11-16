import { Table, Tag } from 'antd';

const UserTable = (props) => {
    const { dataUsers } = props;
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


    return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
};
export default UserTable;