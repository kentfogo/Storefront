import React from "react";
import { Form, Input, InputNumber, Button } from 'antd';
/*import { Container, FormContainer } from "./ContactElements"*/


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const ContactForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (


    <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    validateMessages={validateMessages}
    style = {{
      display: "block",
      position: "relative",
      top:" 100px",
      letterSpacing: "1.76px",
      lineHeight: "2.1em",
      fontSize: "16px",
      margin: "auto",
      width: "600px"
    }}>
      <div
      style= {{
        display: "flex",
        width: "300px",
        padding: "10px 10px",
        margin: "auto"

      }}>
      <Form.Item
        name={['user', 'firstName']}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastName']}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
        style={{paddingLeft:"10px"}}
      >
        <Input style={{width:"300px"}}/>
      </Form.Item>
      </div>

      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'subject']}
        label="Subject"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />

      </Form.Item>
      <Form.Item name={['user', 'message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

  );
};

export default ContactForm
