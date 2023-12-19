import React, { useEffect, useState } from "react";
import { ServiceCard } from "../components/serviceCardComponent";
import { DatePicker, Layout, Modal } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderComponent } from "../components/headerComponent";

export const ServicesPage = () => {

    const [user, setUser] = useState<any>();
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }
        , []);

    const [selectedDate, setSelectedDate] = useState<any>();
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
        console.log(selectedDate);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/service')
            .then(response => response.json())
            .then(data => setData(data));
    }
        , []);
    return (
        <Layout className="layout">
            <HeaderComponent selectedKey="2" />
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, marginTop: 10 }}>
                    <h1>Welcome back {user?.fullName}, Browse our services</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {data.map((service: any) => <ServiceCard title={service.name} description={service.description} price={service.price}
                            onBookNow={() => handleBookNow(service)} />)}
                    </div>
                </div>
                <Modal title={`Book ${selectedService?.name} Service`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Order By: {user?.fullName}</p>
                    <p>Service: {selectedService?.name}</p>
                    <p>Please Select your desired booking date</p>
                    <DatePicker onChange={(date, dateString) => setSelectedDate(dateString)} />
                    <h3>Total: {selectedService?.price}$</h3>
                </Modal>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                HandyHelp @ 2024 - Web Prog I Project
            </Footer>
        </Layout>

    );

}
