import { Button, Card } from 'antd';
import ReactDOM from 'react-dom';

interface ServiceCardProps {
    title?: number;
    description?: string;
    price?: number;
    onBookNow?: () => void;
}

export const ServiceCard = (props: ServiceCardProps) => {

    return (
        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://build.com.au/files/styles/blog_700/public/idea/images/handyman_services.jpg?itok=Y_1QWzay" />
            </div>
            <div className="custom-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', alignItems: 'center' }}>
                {props.title}
                <p>{props.description}</p>
                <div>
                    <Button type="primary" onClick={props.onBookNow}>Book Now</Button>
                </div>
                <p>{props.price} $</p>
            </div>
        </Card >
    );
}
