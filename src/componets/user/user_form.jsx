import { Input, Button, notification, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { createUserAPI } from "../../service/api.service";
const UserForm = (props) => {
    const { loadUser } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setphone] = useState("");


    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tao User thanh cong"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error Create user",
                description: JSON.stringify(res.message)
            })
        }
    }


    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setphone("");
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3>Table User</h3>
                    <Button
                        type="primary"
                        onClick={() => setIsModalOpen(true)}
                    >Create User</Button>
                </div>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={() => handleSubmitBtn()} onCancel={() => resetAndCloseModal(false)}>
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
                </div>
            </Modal>
        </div>
    );
}

export default UserForm;