import React, { useEffect, useState } from "react";
import { ServiceCard } from "../components/serviceCardComponent";
import { Layout, Modal } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderComponent } from "../components/headerComponent";

export const ServicesPage = () => {
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
                    <h1>Our Services</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {data.map((service: any) => <ServiceCard title={service.name} description={service.description} price={service.price}
                            onBookNow={() => handleBookNow(service)} />)}
                    </div>
                </div>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>


                </Modal>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                HandyHelp @ 2024 - Web Prog I Project
            </Footer>
        </Layout>

    );

}
