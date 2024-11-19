import { useEffect, useState } from "react";
import { updateUserAPI } from "../../service/api.service";
import { Input, Button, notification, Table, Modal } from "antd";

const UpdateUserModal = (props) => {
    const { isModalUpdateOpen, setisModalUpdateOpen, dataUpdate, setDataUpdate } = props;
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setphone] = useState("");

    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setId(dataUpdate._id);
            setphone(dataUpdate.phone);
        }
    }, [dataUpdate]);

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cap Nhat User thanh cong"
            })
            resetAndCloseModal();
            // await loadUser();
        } else {
            notification.error({
                message: "Error Create user",
                description: JSON.stringify(res.message)
            })
        }
    }


    const resetAndCloseModal = () => {
        setisModalUpdateOpen(false);
        setFullName("");
        setId("");
        setphone("");
        setDataUpdate(null);
    }


    return (<Modal title="Basic Modal" open={isModalUpdateOpen} onOk={() => handleSubmitBtn()} onCancel={() => resetAndCloseModal(false)}>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <div>
                <span>Id</span>
                <Input
                    value={id}
                    disabled
                />
            </div>
            <div>
                <span>Full Name</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setFullName(event.target.value) }} />
            </div>

            <div>
                <span>Phone Number</span>
                <Input
                    value={phone}
                    onChange={(event) => { setphone(event.target.value) }} />
            </div>
        </div>
    </Modal>);
}

export default UpdateUserModal;