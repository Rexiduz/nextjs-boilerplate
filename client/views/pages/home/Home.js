import LoginForm from '@Client/features/LoginForm'

import styled from 'styled-components'

const Container = styled.div``

export default function Home() {
  return (
    <Container className="bg-red-50">
      <div>
        <LoginForm />
      </div>
    </Container>
  )
}
