import React, { useState } from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleLogin = async () => {
    const result = await axios.post('http://localhost:3001/login', {
      email,
      password,
    })
    if (result.status === 200) {
      history.push("/update")
    }
  }
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color='teal' fluid size='large' onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
        {/* <Message>
          New to us? <a href="#">Sign Up</a>
        </Message> */}
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm
