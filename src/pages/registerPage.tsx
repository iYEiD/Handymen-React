import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {


    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);

        fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: values.fullname,
                username: values.username,
                email: values.email,
                password: values.password
            })
        }).then(() => {
            window.location.href = '/';
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
            <Card style={{ width: 400, border: '1px solid #000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>HandyHelp</h1>
                <hr />
                <br />


                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your Full Name!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your Email!' },
                            { type: 'email', message: 'The input is not valid E-mail!' }
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                    <Form.Item style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Create Account
                        </Button>
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                        <Typography.Link href="/">Already have an account? Sign in</Typography.Link>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}