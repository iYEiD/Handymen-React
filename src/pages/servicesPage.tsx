import React, { useEffect } from "react";
import { ServiceCard } from "../components/serviceCard";

export const ServicesPage = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/service')
            .then(response => response.json())
            .then(data => setData(data));
    }
        , []);
    return (
        <div>
            <h1>Services</h1>
            <div>
                {data.map((service: any) => <ServiceCard title={service.name} description={service.description} price={service.price} />)}
            </div>
        </div>
    );
}
