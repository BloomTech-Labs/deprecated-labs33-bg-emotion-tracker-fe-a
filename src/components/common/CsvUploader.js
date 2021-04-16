import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

// testing axios functionality ---> this will need to be changed later
import axios from 'axios';

const { Dragger } = Upload;

function CsvUploader() {
  const config = {
    headers: { Authorization: `Bearer ${window.token}` },
  };

  const postCSV = csvFile => {
    axios
      .post(
        'https://bg-emotion-tracker-be-a.herokuapp.com/members/upload',
        csvFile,
        config
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const props = {
    name: 'Member_ID_CSV',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    customRequest() {
      // axios.post('https://bg-emotion-tracker-be-a.herokuapp.com/members/upload', csvFile)
      // .then(res => {
      //   console.log(res);
      // })
      // .catch(err =>
      // {
      //   console.log(err);
      // });
      console.log('Line 38 Test');
    },
    onChange(info) {
      const { status } = info.file;
      console.log(info.file);
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      postCSV(info.file);
    },
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}

export default CsvUploader;
