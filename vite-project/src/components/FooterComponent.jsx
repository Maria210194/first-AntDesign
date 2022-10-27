import {Layout} from 'antd';
const {Footer} = Layout;
import {footerLinks} from '../assets/data';

const FooterComponent = () => {
    return (
        <Footer style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {footerLinks.map((footerlink, index) => {
                return (
                    <div key={index}>
                        <h5 className="footerTitle">{[footerlink.title]}</h5>
                        <ul className="footerList">
                            {footerlink.links.map((link, index) => (
                                <li key={link.name}>{link.name}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </Footer>
    );
};

export default FooterComponent;
