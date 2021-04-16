/* 
This component will most likely replace the program dash. I was with christopher 
*/
import React from 'react';
import { Table, Tag, Space } from 'antd';

const ClubTable = () => {
  /*this is dummy data, it will be deleted. */
  const { Column } = Table;
  const data = [
    {
      key: '1',
      firstName: 968987,
      lastName: 'Brown',
      age: 12,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 123456,
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 654321,
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
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
          <h1>Club Management</h1>
        </div>
        <div>
          <button>ADD CLUB</button>
        </div>
      </div>

      <Table dataSource={data}>
        <Column title="DirectorID" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
export default ClubTable;
