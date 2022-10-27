import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blog from './components/Blog';
import FooterComponent from './components/FooterComponent';

import './App.css';
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Blog />
            <FooterComponent />
        </div>
    );
}

export default App;
