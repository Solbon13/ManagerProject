import { Button, Form, Input } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { authUser, registrationUser } from '../../actions/authAction';
import Registration from '../Registration/Registration';

const FormUser = ({isRegister}) => {

  const [form] = Form.useForm();

  const dispatch = useDispatch()

    const onFinish = (values) => {
        form.resetFields();
        console.log("Success:", values);
        if (!isRegister) {
          dispatch(authUser({
            email: values.email,
            password: values.password,
          }))
        } else {
          dispatch(registrationUser({
            firstName: values.firstName,
            lastName: values.lastName,
            patronymic: values.patronymic,
            email: values.email,
            password: values.password,
            // departamentId
          }))
        }
      }
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

    return (
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {!isRegister ? (
            <>
              <Form.Item
                label="Эл. почта"
                name="email"
                rules={[
                  { required: true, message: "Электронная почта!" }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Пароль"
                name="password"
                rules={[
                  { required: true, message: "Пароль!" }
                ]}
              >
                <Input.Password />
              </Form.Item>
            </>
          ) : (
            <Registration/>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {!isRegister ? "Вход" : "Регистрация" }
            </Button>
          </Form.Item>
        </Form>
    )
}

export default FormUser
