import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css'
let userDetails={};
const Signup = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      userDetails=values;
      console.log('User Details',userDetails)
      let merge=undefined;
        const preRecord=JSON.parse(localStorage.getItem('key'));
        console.log(preRecord);
        if (preRecord===null){
            merge=[userDetails] 
        }else{
        merge=[...preRecord,userDetails]};
        localStorage.setItem('key',JSON.stringify(merge));
        
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className='container'>
        <h1>Sign Up</h1>
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button> Already have an Account <a href='login'>Login!</a>
      </Form.Item>
    </Form>
    </div>
    )
}

export default Signup
