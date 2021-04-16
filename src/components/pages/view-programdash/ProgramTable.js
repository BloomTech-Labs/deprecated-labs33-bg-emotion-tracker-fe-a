import React from 'react';
import { Table, Tag, Space } from 'antd';

const ProgramTable = () => {
  /*this is dummy data, it will be deleted. */
  const { Column } = Table;
  const data = [
    {
      key: '1',
      memberID: 968987,
      clubID: 192834,
      miscellaneousID: 'This member is the leader of club #928374',
    },
    {
      key: '2',
      memberID: 123456,
      clubID: 192735,
      miscellaneousID: 'This member is the associate director of club #833989',
    },
    {
      key: '3',
      memberID: 654321,
      clubID: 982361,
      miscellaneousID: 'This member is the director of club #199876 ',
    },
  ];

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
          <h1>Program Management</h1>
        </div>
        <div>
          <button>ADD PROGRAMS</button>
        </div>
      </div>

      <Table dataSource={data}>
        <Column title="DirectorID" dataIndex="memberID" key="memberID" />
        <Column title="ClubID" dataIndex="clubID" key="clubID" />
        <Column
          title="Miscellaneous"
          dataIndex="miscellaneousID"
          key="miscellaneousID"
        />
      </Table>
    </div>
  );
};
export default ProgramTable;
