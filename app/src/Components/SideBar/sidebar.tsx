import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { links, social } from '../../Data/data';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {

  return( <div className={styles.sidebar} >
    <div className={styles.sidebar__header}>
      <AiFillBank className={styles.svg1} />
      <h1 className={styles.titulo}>myBank</h1>
    </div>
    <ul className={styles.links}>
      {links.map((link) => {
        const { id, text, icon } = link;
        return <li key={id}>
          <a>
            {icon}
            {text}
          </a>
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
        const { id, icon, url } = link;
        return( <li key={id}>
          <a href={url} rel='noreferrer' target="_blank">{icon}</a>
        </li>);
      })}
    </ul>
  </div>
  );
};