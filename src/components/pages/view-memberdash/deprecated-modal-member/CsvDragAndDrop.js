// import React from 'react';
// import { Upload, message } from 'antd';
// import { InboxOutlined } from '@ant-design/icons';

// import { getAuthHeader } from '../../../api';

// // 4-20-21
// import { useOktaAuth } from '@okta/okta-react';

// function CsvDragAndDrop() {
//   const { Dragger } = Upload;

//   // let customRequest = () => {
//   //   // inside this function will be the axios call
//   //   axiosWithAuth()
//   //     .post('/members/upload')
//   //     .then(res => {
//   //       console.log(res.data);
//   //     })
//   //     .catch(error => {
//   //       console.log(error.response);
//   //     });
//   // };

//   const { authState, oktaAuth } = useOktaAuth();

//   const token = getAuthHeader(authState);
//   console.log(token);

//   const props = {
//     name: 'file',
//     action: 'https://bg-emotion-tracker-be-a.herokuapp.com/members/upload',
//     headers: token,
//     onChange(info) {
//       const { status } = info.file;

//       if (status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully.`);
//       } else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//   };

//   return (
//     <div>
//       <Dragger {...props}>
//         <p className="ant-upload-drag-icon">
//           <InboxOutlined />
//         </p>
//         <p className="ant-upload-text">
//           Click or drag file to this area to upload
//         </p>
//       </Dragger>
//     </div>
//   );
// }

// export default CsvDragAndDrop;
