import { useState } from 'react';

type Props = {
  isVisibleOnInit?: boolean;
}

const useModal = (isVisibleOnInit?: Props) => {
  const [isVisible, setIsVisible] = useState(!!isVisibleOnInit);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return {
    showModal,
    hideModal,
    isVisible,
    setIsVisible,
  };
};

export default useModal;
