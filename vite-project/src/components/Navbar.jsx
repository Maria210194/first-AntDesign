import {navLinks} from '../assets/data';
import {Layout, Menu} from 'antd';
const {Header} = Layout;
import '../assets/style/style.scss';

const Navbar = () => (
    <Layout className="layout">
        <Header className="navbar" style={{display: 'flex'}}>
            <Menu
                theme="light"
                mode="horizontal"
                style={{width: '100vw'}}
                defaultSelectedKeys={['1']}
                items={navLinks.map((link, index) => {
                    const key = index + 1;
                    return {
                        key,
                        label: `${link.title}`,
                    };
                })}
            />
        </Header>
    </Layout>
);

export default Navbar;
