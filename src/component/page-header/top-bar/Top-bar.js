import './top-bar.scss';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Email from '@material-ui/icons/Email';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
const pageHeader = () => {
//     let iconPhone = {color: "green", fontSize: "1.5em"};
    return (
        <div id="top-bar" className='header header-top'>
        <div  className='flex-row container'>
                <div className="flex-col col-space"></div>
                <div className="flex-col col-phone">
                        <h3>Vườn Sen Đá</h3>
                </div>
                <div className="flex-col col-mid-space"></div>
                <div className="flex-col col-follow">
                        <Facebook />
                        <Instagram />
                        <Email />
                </div>
                <div className="flex-col col-space"></div>
        </div>
        </div>
    );
}
export default pageHeader;