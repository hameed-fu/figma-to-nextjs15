'use client';

import { Modal, Button } from 'antd';

export default function ApproveModal({ open, onClose }) {
  return (
    <Modal
      title="Отправить на согласование"
      open={open}
      onCancel={onClose}
      footer={[
  <Button key="cancel" type="outlined" onClick={onClose}>
    Отмена
  </Button>,
  <Button key="submit" shape="round" onClick={onClose}>
    Добавить
  </Button>,
]}

    >
      <p>Вы уверены, что хотите отправить заявку на согласование?</p>
    </Modal>
  );
}
