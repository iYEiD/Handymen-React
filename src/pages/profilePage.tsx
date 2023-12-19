import { Layout, Breadcrumb, Button, Modal, Input } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderComponent } from "../components/headerComponent";
import { useEffect, useState } from "react";

export const AccountPage = () => {

    const [user, setUser] = useState<any>();
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }
        , []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleChangeNow = () => {
        showModal();

    }

    const handleOk = () => {
        if (newPassword !== confirmedNewPassword) {
            if (newPassword === '') {
                console.log('New password cannot be empty');

                return;
            }
            else if (oldPassword === newPassword) {
                console.log('New password cannot be the same as old password');

                return;
            }
            console.log('New passwords do not match');

            return;
        }

        fetch(`http://localhost:3001/user/updatePassword/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                oldPassword: oldPassword,
                newPassword: newPassword
            })
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            console.log(data);
            if (data) {
                console.log('Password changed successfully');
            } else {
                console.log('Failed to change password');
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmedNewPassword, setConfirmedNewPassword] = useState('');


    return (
        <Layout className="layout">
            <HeaderComponent selectedKey="3" />
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, marginTop: 10 }}>
                    <h1>My Profile</h1>
                    <hr />
                    <h2>UserID</h2><p>{user?.id}</p>
                    <h2>Full Name</h2><p>{user?.fullName}</p>
                    <h2>Email</h2><p>{user?.email}</p>
                    <h2>Account Username</h2><p>{user?.username}</p>
                    <Button type="primary" onClick={handleChangeNow}>Change Password</Button>
                </div>
                <Modal title="Change Your Password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                    <hr />
                    <h3>Old Password</h3>
                    <Input type="password" onChange={(e) => setOldPassword(e.target.value)} />
                    <h3>New Password</h3>
                    <Input type="password" onChange={(e) => setNewPassword(e.target.value)} />
                    <h3>Confirm New Password</h3>
                    <Input type="password" onChange={(e) => setConfirmedNewPassword(e.target.value)} />
                </Modal>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                HandyHelp @ 2024 - Web Prog I Project
            </Footer>
        </Layout>

    );
}
function setIsModalOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

function setSelectedService(service: any) {
    throw new Error("Function not implemented.");
}

