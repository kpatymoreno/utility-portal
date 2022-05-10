import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';


const Navigation = () => {
    return(
      <Fragment>
        <div className = "navigation">
          <div className = 'logo-container'>         
          <Link className = "link-nav" to = '/'>
          <img className = 'img-logo' src={require('../../assets/images/Logo-blue-text.jpg')} width="45" height="60" alt="logo" />         
            </Link>
          </div>
            <div className = "nav-links-container">
              <Link className = "link-nav" to = '/Registration'>
              <h5>registro</h5>
              </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
        
    );
}
export default Navigation