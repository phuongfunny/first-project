import './Header.scss';
import TopBar from './top-bar/Top-bar';
import Search from './search/Header-search';
const pageHeader = (props) => {
    return (
        <header>
            <TopBar />
            <Search />
            <div className='page-header'>
                <h1>Hello, {props.title}.</h1>
                <h2>Change, {props.title}.</h2>
            </div>
        </header>
    );
}
export default pageHeader;