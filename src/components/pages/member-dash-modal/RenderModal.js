import React, { useState } from 'react';

//Necessary common components for modul layout
import CsvDragAndDrop from '../member-dash-modal/CsvDragAndDrop';

import MemberIdImportForm from './MemberIdImportForm';

// ant design components
import { Modal, Button } from 'antd';

// styles
import './modal.less';
import CsvPreviewer from './CsvPreviewer';

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
    <>
      {/* The below button needs to be on the member dash */}
      <Button type="primary" onClick={showModal}>
        Add Member ID
      </Button>
      <Modal
        // title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width="45%"
        height="50%"
      >
        <div className="mainWindow">
          <div className="memberInputContainer">
            <div className="memberInput">
              <MemberIdImportForm />
            </div>
            <div className="dragAndDrop">
              <CsvDragAndDrop />
            </div>
          </div>

          <div className="csvPreviewContainer">
            <div>
              <CsvPreviewer />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default RenderModal;
