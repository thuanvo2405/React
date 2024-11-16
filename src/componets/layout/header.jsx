// import "./header.css"
import { NavLink, Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from "react";


const Header = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link >,
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: <Link to={"/user"}>Users</Link >,
            key: 'users',
            icon: <AppstoreOutlined />,
        },
        {
            label: <Link to={"/book"}>Book</Link >,
            key: 'products',
            icon: <AppstoreOutlined />,
        },
    ];

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

}

export default Header;
