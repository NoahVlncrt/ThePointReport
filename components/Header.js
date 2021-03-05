import { Layout, Menu} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function HeaderNav(){
    return(
        <Header>
            <Menu>
                <Menu.Item key="about">
                    About
                </Menu.Item>
                <Menu.Item key="user/area">
                     Sign Up
                </Menu.Item>
            </Menu>
        </Header>
    )
}