import { LoginOutlined } from '@ant-design/icons'
import { Form as AntForm, Input, Button } from 'antd'
import styled from 'styled-components'

const Form = styled(AntForm)`
  .ant-form-item-label > label {
    font-size: 1.05rem;
  }

  .ant-input-affix-wrapper,
  .ant-input {
    border-radius: 10px;
    padding: 10px;
  }
`

const size = 60

export default function LoginForm({ ...props }) {
  const onSubmit = () => {}

  return (
    <Form name="basic" onFinish={onSubmit} layout="vertical" {...props}>
      <div
        style={{
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '2.5rem'
        }}
      >
        <div>Investment</div>
        <div style={{ fontSize: '1rem' }}>Dashboard</div>
      </div>
      <Form.Item
        name="username"
        rules={[{ message: 'Please input your username!' }]}
      >
        <Input bordered placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ message: 'Please input your password!' }]}
      >
        <Input.Password bordered placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button
          className="center"
          type="primary"
          shape="circle"
          htmlType="submit"
          icon={<LoginOutlined style={{ fontSize: 25 }} />}
          style={{ width: size, height: size, margin: '1rem auto 0' }}
        />
      </Form.Item>
    </Form>
  )
}
