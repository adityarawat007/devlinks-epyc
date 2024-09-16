import React from 'react';
import styles from '../../page.module.css';
import Button from '../Button';
import Image from 'next/image';

const CustomLink: React.FC = () => {
  return (
    <div className={styles.customTab}>
      <div className={styles.customTabHeader}>
        <h2>Customize your links</h2>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Button title="+ Add New Link" />
      <div className={styles.addLinkCta}>
        <Image src="images/illustration-empty.svg" width={250} height={160} alt='illustration-empty' />
        <h2>Let’s get you started</h2>
        <p>
          Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
        </p>
      </div>
      <div >
        <Button  title="Save" />
      </div>
    </div>
  );
};

export default CustomLink;

