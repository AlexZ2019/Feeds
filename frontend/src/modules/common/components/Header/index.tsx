import { Button, Row } from "antd";
import styles from "./index.module.css"
import { FC } from "react";

type HeaderProps = {
  logout?: () => void;
  title: string;
  userEmail?: string;
};
const Header: FC<HeaderProps> = ({ logout, title, userEmail }) => {

  return <header className={`${styles.header} mb`}>
    <h3>{ title }</h3>
    {userEmail && logout && <div>
      <span className={styles.email}>{userEmail}</span>
      <Button type="text" onClick={logout}>Logout</Button>
    </div>}
  </header>
}

export default Header;
