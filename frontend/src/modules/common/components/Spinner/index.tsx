import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { FC } from 'react';

type Props = {
  spinnerType: 'main' | 'simple',
  customStyles: string,
  size?: 'small' | 'large' | 'default' | undefined;
}

const Spiner: FC<Props> = ({spinnerType, customStyles = '', size}) => {
  return (
    <div className={spinnerType === 'main' ? styles.mainSpinner : customStyles}>
      <Spin indicator={<LoadingOutlined className={styles.spinner} spin />} size={ size || "large"} />
    </div>
  );
};

export default Spiner;
