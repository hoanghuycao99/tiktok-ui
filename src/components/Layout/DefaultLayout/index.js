import Header from '../Header';
import Sidebar from './Sidebar';

function defaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="cotent">{children}</div>
            </div>
        </div>
    );
}

export default defaultLayout;
