/* 
This component will most likely replace the program dash. I was with christopher 
*/
import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';

// ---- merging render model with member table
import { Modal, Button } from 'antd';
import CsvImport from './new-modal-member/CsvImport';
import ManualMemberIdForm from './new-modal-member/ManualMemberIdForm';

import './new-modal-member/styles/renderModal.less';

//------------

const MemberTable = () => {
  // ------- 4/21 modal state code ------------
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

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
  // --------- End of Modal Code ---------

  // ------------------------

  const [members, setMembers] = useState([]);

  const tokens = JSON.parse(localStorage.getItem('okta-token-storage'));
  const access_token = tokens.accessToken.accessToken;

  const newData = [];
  const dataConverter = data => {
    for (let i = 0; i < data.length; i++) {
      // append an object with a key value
      newData.push({ key: i, memberID: data[i].memberid });
    }
    setMembers(newData);
  };

  useEffect(() => {
    axios
      .get(`https://bg-emotion-tracker-be-a.herokuapp.com/members/members`, {
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      })
      .then(res => {
        console.log(res.data);
        dataConverter(res.data);
      })
      .catch(error => {
        console.log('THis is you error --->', error);
      });
  }, []);
  // ------------------------

  const { Column } = Table;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <div>
          <h1>Member Management</h1>
        </div>
        <div>
          <Button type="primary" onClick={showModal}>
            Add Members
          </Button>
        </div>
      </div>
      {/* The modal only appears on button click  */}
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
      {/* end of modal rendering code  */}
      <Table dataSource={members}>
        <Column title="MemberID" dataIndex="memberID" key="memberID" />
      </Table>
    </div>
  );
};
export default MemberTable;
