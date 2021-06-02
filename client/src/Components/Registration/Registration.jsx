import { Form, Input } from 'antd';
import React from 'react'

const Registration = () => {
    return (
        <>
              <Form.Item
                label="Фамилия"
                name="firstName"
                rules={[
                  { required: true, message: "Фамилия!" }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Имя"
                name="lastName"
                rules={[
                  { required: true, message: "Имя!" }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Отчество"
                name="patronymic"
                // rules={[
                //   { required: true, message: "Please input your username!" }
                // ]}
              >
                <Input />
              </Form.Item>
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
              <Form.Item
                name="confirm"
                label="Повторить пароль"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Пароль!"
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("Пароли не совпадают!"));
                    }
                  })
                ]}
              >
                <Input.Password />
              </Form.Item>
            </>
    )
}

export default Registration
