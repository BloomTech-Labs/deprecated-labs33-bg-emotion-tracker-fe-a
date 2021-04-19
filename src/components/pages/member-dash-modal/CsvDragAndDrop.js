import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import axios from 'axios';
import { axiosWithAuth } from './axioswithauth';

function CsvDragAndDrop() {
  const { Dragger } = Upload;

  let customRequest = () => {
    // inside this function will be the axios call
    axiosWithAuth()
      .post('/members/upload')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const props = {
    name: 'file',
    onChange(info) {
      const { status } = info.file;
      console.log(info.file.getItem);
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      console.log(info.file.fileList);
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
      </Dragger>
    </div>
  );
}

export default CsvDragAndDrop;
