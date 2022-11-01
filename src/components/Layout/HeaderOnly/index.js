import Header from '../Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="cotent">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
