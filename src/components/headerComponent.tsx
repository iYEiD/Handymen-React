import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

interface HeaderComponentProps {
    selectedKey: string;
}


export const HeaderComponent = ({ selectedKey }: HeaderComponentProps) => {
    return (<Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedKey]}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">My Bookings
                <Link to='/mybookings'></Link></Menu.Item>
            <Menu.Item key="2">Browse Services
                <Link to='/services'></Link></Menu.Item>
            <Menu.Item key="3">My Profile
                <Link to='/myprofile'></Link></Menu.Item>
        </Menu>
    </Header>
    );
}