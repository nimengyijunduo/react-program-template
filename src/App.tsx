import './App.css';

import { Link } from 'react-router-dom'

import Layout from './layout';

function App() {

    return (
        <div className="App">
            <div className='link'>
                <Link to="/demo1">demo1</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/demo2">demo2</Link>
            </div>
            <Layout></Layout>
        </div>
    );
}

export default App;
