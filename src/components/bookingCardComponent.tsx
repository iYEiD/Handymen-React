import { Button, Card } from 'antd';
import ReactDOM from 'react-dom';

interface BookingCardProps {
    bookingId?: number;
    date?: Date;
    status?: string;
    onCancelNow?: () => void;
}

export const BookingCard = (props: BookingCardProps) => {

    return (
        <Card style={{ width: 400, margin: 10 }} bodyStyle={{ padding: 0 }}>

            <div className="custom-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: 10 }}>
                Booking Id: {props.bookingId}
                <br />
                Booking Date: {props.date?.toString()}
                <hr />
                <div>
                    <Button type="primary" onClick={props.onCancelNow}>Cancel Booking</Button>
                </div>
                <p>Current Status: {props.status}</p>
            </div>
        </Card >
    );
}
