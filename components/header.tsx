// import React, { useState } from 'react';
// import styles from './Header.module.css';
// import Modal from './Modal';

import { FC, useState } from "react";
import Modal from "./Modal";
import styles from './Header.module.css';

const Header: FC = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="adhd.tsx">ADHD</a></li>
          <li><a href="/symptoms">SYMPTOMS &amp; TESTS</a></li>
          <li><a href="/parenting">ADHD PARENTING</a></li>
          <li><a href="/treatment">ADHD TREATMENT</a></li>
        </ul>
        <a href="#" className={styles.contactButton} onClick={openModal}>CONTACT US</a>
      </nav>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>Zavod Mavrični Bojevniki</h2>
        <p>Bregarjeva 39</p>
        <p>1000 Ljubljana</p>
        <p>Slovenija</p>
        <p>T: +386 40 648 294 – Dejan Sotirov</p>
        <p>(vsak delavnik od 14.00 do 15.30)</p>
        <p>@: info@mavricnibojevniki.org</p>

      </Modal>
    </header>
  );
}

export default Header;



// T: +386 40 648 294 – Dejan Sotirov
// (vsak delavnik od 14.00 do 15.30)
// @: info@mavricnibojevniki.org