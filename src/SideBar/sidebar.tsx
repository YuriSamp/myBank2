import { memo } from 'react';
import { AiFillBank } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { links, social } from '../Data/data.jsx';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';


const MenuLateral = () => {
  return (
    <aside className={styles.sidebar} >
      <div className={styles.sidebar__header}>
        <AiFillBank className={styles.svg1} />
        <h1 className={styles.titulo}>myBank</h1>
      </div>
      <ul className={styles.links}>
        {links.map((link) => {
          return <li key={link.id}>
            <Link to={link.url}>
              {link.icon}
              {link.text}
            </Link>
          </li>;
        })}
      </ul>
      <div className={styles.UserDisplay}>
        <div className="User">
          <CgProfile />
        </div>
        <div className={styles.UserDisplay__userName}>
          <p>Yuri Santos</p>
        </div>
      </div>
      <ul className={styles.socialicons}>
        {social.map((link) => {
          return (<li key={link.id}>
            <a href={link.url} rel='noreferrer' target="_blank">{link.icon}</a>
          </li>);
        })}
      </ul>
    </aside>
  );
};

export const Sidebar = memo(MenuLateral);