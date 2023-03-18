import Modal from '@components/Modal';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export function Default() {
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    setVisible(() => true);
  }, []);

  const modalClose = useCallback(() => {
    setVisible(() => false);
  }, []);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Show Modal
      </button>
      <Modal visible={visible} onClose={modalClose}>
        Modal
        <button type="button" onClick={modalClose}>
          close
        </button>
      </Modal>
    </div>
  );
}
