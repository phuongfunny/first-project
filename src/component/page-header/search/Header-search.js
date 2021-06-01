import InputBase from '@material-ui/core/InputBase';
import './search.scss';
const pageHeader = () => {
//     let iconPhone = {color: "green", fontSize: "1.5em"};
    return (
        <div id="header-search" className='header search'>
            <div className='content'>
                <div  className='logo'>
                    <img src='../../image/logo.png' alt="Logo"></img>
                </div>
                <div className="form-search">
                    <InputBase />
                </div>
            </div>
        </div>
    );
}
export default pageHeader;