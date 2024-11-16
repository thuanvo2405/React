import UserTable from '../componets/user/user_table'
import UserForm from '../componets/user/user_form';
const userPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>);
}

export default userPage;