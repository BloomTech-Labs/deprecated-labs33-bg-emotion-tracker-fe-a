// // Note: this form will take in a manual member id and will post it to a Spring BackEnd

// import React, { useState } from 'react';
// import { Form, Input, Button, Radio } from 'antd';

// const MemberIdImportForm = () => {
//   const [form] = Form.useForm();
//   const [formLayout, setFormLayout] = useState('horizontal');

//   const onFormLayoutChange = ({ layout }) => {
//     setFormLayout(layout);
//   };

//   const formItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           labelCol: {
//             span: 4,
//           },
//           wrapperCol: {
//             span: 22,
//           },
//         }
//       : null;

//   const buttonItemLayout =
//     formLayout === 'horizontal'
//       ? {
//           wrapperCol: {
//             span: 16,
//             offset: 4,
//           },
//         }
//       : null;

//   return (
//     <>
//       <Form
//         {...formItemLayout}
//         layout={formLayout}
//         form={form}
//         initialValues={{
//           layout: formLayout,
//         }}
//         onValuesChange={onFormLayoutChange}
//       >
//         <h3>Manual Member Entry</h3>
//         <Form.Item>
//           <Input placeholder="Member Id" />
//         </Form.Item>
//         <Form.Item {...buttonItemLayout}>
//           <Button type="primary">Enter</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default MemberIdImportForm;
