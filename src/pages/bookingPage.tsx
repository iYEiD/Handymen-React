import { Layout, Breadcrumb } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderComponent } from "../components/headerComponent";
import { ServiceCard } from "../components/serviceCardComponent";
import { useEffect, useState } from "react";

export const BookingPage = () => {

    const [user, setUser] = useState<any>();
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }
        , []);

    return (



        <Layout className="layout">
            <HeaderComponent selectedKey="1" />
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, marginTop: 10 }}>
                    <h1>Your Bookings {user?.username}</h1>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                HandyHelp @ 2024 - Web Prog I Project
            </Footer>
        </Layout>

    );
}
