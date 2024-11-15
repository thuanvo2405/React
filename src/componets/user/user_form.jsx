import { Input, Button, notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../service/api.service";
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setphone] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        console.log(res);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tao User thanh cong"
            })
        }
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setphone(event.target.value) }} />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={handleClickBtn}
                    >Create User</Button>
                </div>
            </div>
        </div>
    );
}

export default UserForm;