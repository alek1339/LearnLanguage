import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import gear from '../../images/icons/gear.png';
import { logoutUser } from '../../actions/authActions';
import { useAppDispatch } from '../../store';
import { isNode } from '../../hooks/isNode';

const GearDropdown = () => {
  const [openedDropdown, setOpenedDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement; // Type assertion
      if (
        dropdownRef.current &&
        isNode(event.target) &&
        !dropdownRef.current.contains(event.target) &&
        !target.classList.contains('gear-icon')
      ) {
        setOpenedDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleOnClick = () => {
    console.log(openedDropdown);
    setOpenedDropdown(!openedDropdown);
  };

  const handleLogout = () => {

    dispatch(logoutUser());
  };

  return (
    <div className="dropdown-container">
      <img onClick={handleOnClick} className="gear-icon" src={gear} alt="gear-icon" />
      {openedDropdown && (
        <div ref={dropdownRef} className="dropdown">
          <div className="dropdown-item">
            <Link to="/profile">
              <h3>Profile</h3>
            </Link>
          </div>
          <div className="dropdown-item" onClick={handleLogout}>
            <h3>Logout</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default GearDropdown;
