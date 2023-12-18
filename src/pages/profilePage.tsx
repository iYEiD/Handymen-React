import { Layout, Breadcrumb } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { HeaderComponent } from "../components/headerComponent";

export const AccountPage = () => {
    return (
        <Layout className="layout">
            <HeaderComponent selectedKey="3" />
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, marginTop: 10 }}>
                    <h1>My Profile</h1>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                HandyHelp @ 2024 - Web Prog I Project
            </Footer>
        </Layout>

    );
}
