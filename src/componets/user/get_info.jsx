import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";

const GetUserModal = (props) => {
    const { isModalGetInfo, setIsModalGetInfo, dataUpdate } = props;
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

    const resetAndCloseModal = () => {
        setIsModalGetInfo(false);
        setFullName("");
        setId("");
        setphone("");
    }


    return (<Modal title="Basic Modal" open={isModalGetInfo} onOk={() => resetAndCloseModal(false)} onCancel={() => resetAndCloseModal(false)}>
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
                    disabled />
            </div>

            <div>
                <span>Phone Number</span>
                <Input
                    value={phone}
                    disabled />
            </div>
        </div>
    </Modal>);
}

export default GetUserModal;