import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        }).then((res) => {
            console.log(res);
            if (res.status === 201) {
                window.location.href = '/services';
            }
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'url(https://s.tmimgcdn.com/scr/1200x627/328500/blue-wave-water-background-design-vector-v22_328550-original.jpg) no-repeat center center fixed',
            backgroundSize: 'cover'
        }}>
            <Card style={{ width: 300, border: '1px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>HandyHelp</h1>
                <hr />
                <br />
                <br />


                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            Sign in
                        </Button>
                        <Link to="/register">
                            <Button type="default" htmlType="submit">
                                Register
                            </Button >
                        </Link>
                    </Form.Item>
                </Form>

            </Card>
        </div>
    );

}