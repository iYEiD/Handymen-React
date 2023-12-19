import { Layout, Breadcrumb, Row } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderComponent } from "../components/headerComponent";

import { useEffect, useState } from "react";
import React from "react";
import { BookingCard } from "../components/bookingCardComponent";

export const BookingPage = () => {

    const [data, setData] = React.useState([]);
    const [user, setUser] = useState<any>();
    useEffect(() => {
        const localUser = localStorage.getItem('user');
        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }
        , []);
    useEffect(() => {
        if (user && user.id) {
            fetch(`http://localhost:3001/booking/user/${user.id}`)
                .then(response => response.json())
                .then(data => setData(data));
        }
    }, [user]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<any>();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleBookNow = (service: any) => {
        showModal();
        setSelectedService(service);
    }

    const handleOk = () => {


        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };




    return (
        <Layout className="layout">
            <HeaderComponent selectedKey="1" />
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, marginTop: 10 }}>
                    <h1>Your Bookings</h1>
                    <hr />

                    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                        {data.map((booking: any) => <BookingCard bookingId={booking.id} date={booking.date} status={booking.status} onCancelNow={() => handleCancel()} />)
                        }

                    </div>
                </div>

            </Content>

            <Footer style={{ textAlign: 'center' }}>
                HandyHelp @ 2024 - Web Prog I Project
            </Footer>
        </Layout>

    );
}
