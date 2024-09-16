import React from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import Frame from '@/app/(components)/Frame';
import CustomLink from '@/app/(components)/CustomLink';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Frame />
      <CustomLink />
    </div>
  );
};

export default Home;
