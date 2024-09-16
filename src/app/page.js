import Image from "next/image";
import styles from "./page.module.css";
import Frame from "./(components)/Frame";
import CustomLink from "./(components)/CustomLink";

export default function Home() {
  return (
    <div className={styles.main} >
       <Frame/>
       <CustomLink/>
    </div>
  );
}
