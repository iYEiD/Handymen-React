import { Card } from 'antd';
import ReactDOM from 'react-dom';

interface ServiceCardProps {
    title?: number;
    description?: string;
    price?: number;
}

export const ServiceCard = (props: ServiceCardProps) => {

    return (
        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
            <div className="custom-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {props.title}
                <p>{props.description}</p>
                <p>{props.price} $</p>
            </div>
        </Card>
    );
}
