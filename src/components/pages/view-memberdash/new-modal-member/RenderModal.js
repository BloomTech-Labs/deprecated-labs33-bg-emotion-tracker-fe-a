import React from 'react';
import { Modal, Button } from 'antd';
import CsvImport from './CsvImport';
import ManualMemberIdForm from './ManualMemberIdForm';

import './renderModal.less';

function RenderModal() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  // const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Members
      </Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="mainDisplayWindow">
          <div className="manualFormWindow">
            <ManualMemberIdForm />
          </div>

          <div className="csvDisplayWindow">
            <CsvImport />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RenderModal;
