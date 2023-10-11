
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import iconAdmin from '../../assets/settings.svg';
import { hasAnyRoles } from '../../services/AuthService';
import { ContextToken } from '../../utils/contextToken';
import { CartIcon } from '../CartIcon';
import LoggedUser from '../LoggedUser';

export default function HeaderClient() {

  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <>
      <header className="fb-nav-container">
        <nav className="fb-nav-main">
          <Link to="/">
            <h1>Commerce</h1>
          </Link>

          <div className="fb-menu-items-container">
            {
              contextTokenPayload &&
              hasAnyRoles(['ROLE_ADMIN']) &&
              <Link to="/admin">
                <div className="fb-menu-items">
                  <img src={iconAdmin} alt="Admin" />
                </div>
              </Link>
            }


            <div className="fb-menu-items">
              <CartIcon />
            </div>

            <LoggedUser />

          </div>
        </nav>
      </header>
    </>
  );
}