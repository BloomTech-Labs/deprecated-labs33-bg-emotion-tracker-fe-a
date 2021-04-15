import React from 'react';

//Necessary common components for modul layout
import CsvManualImport from '../../common/CsvManualImport';
import CsvUploader from '../../common/CsvUploader';
import MemberIdImportForm from '../../common/MemberIdImportForm';

// ant design components
import { Modal, Button } from 'antd';

// styles
import './modal.less';

// added styles
const MainWindowDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
  justify-content: space-between;
  background-color: gray;
`;

const MemberInputWindowDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  width: 50%;
  border-right-style: solid;
  align-items: center;
  background-color: lightblue;
`;

const MemberInputDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 10%;
  padding-left: 5%;
  width: 100%;
  border-bottom: solid;
  margin-bottom: 7%;
  background-color: lightgreen;
`;

const CsvPreviewerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightcoral;
  width: 75%;
  margin-left: 2%;
`;

function RenderMemberDashModal() {
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
        Open Modal with async logic
      </Button>
      <Modal
        // title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width="45%"
        height="50"
      >
        <MainWindowDiv>
          {/* <div className="mainWindow"></div> */}
          <MemberInputWindowDiv>
            {/* <div className="memberInputContainer"></div>*/}
            <MemberInputDiv>
              {/* <div className="memberInput"></div> */}
              <MemberIdImportForm />
                {/* <div className="member"></div> */}
            </MemberInputDiv>

            <div>
              <CsvUploader />
            </div>

            <div>
              <CsvManualImport />
            </div>
          </MemberInputWindowDiv>

          <CsvPreviewerDiv>
            <div>
              <h3> CSV previewer window (Stretch) </h3>
            </div>
            <div></div>
          </CsvPreviewerDiv>
        </MainWindowDiv>
      </Modal>
    </>
  );
}

export default RenderMemberDashModal;
