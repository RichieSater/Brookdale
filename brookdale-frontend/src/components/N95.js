import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react'
import Tilt from 'react-tilt'
import N95Pic from '../images/N95Pic.png'
import { Link } from 'react-router-dom'

const N95 = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Tilt
        className='Tilt'
        options={{ max: 45 }}
        style={{ height: 375, width: 375 }}
      >
        <div className='Tilt-inner'>
          <img
            className='Transparent'
            style={{ paddingTop: '5px' }}
            alt='logo'
            src={N95Pic}
            height={375}
          />
        </div>
      </Tilt>
    </Grid.Column>
    <Grid.Column>
      <Container text>
        <Header as='h2'>N95 Mask</Header>
        <p class='center'>
          An N95 respirator is a respiratory protective device designed to
          achieve a very close facial fit and very efficient filtration of
          airborne particles. The 'N95' designation means that when subjected to
          careful testing, the respirator blocks at least 95 percent of very
          small (0.3 micron) test particles. If properly fitted, the filtration
          capabilities of N95 respirators exceed those of face masks. However,
          even a properly fitted N95 respirator does not completely eliminate
          the risk of illness or death.
        </p>
        <p>
          N95's are the bread and butter of Brookdale's PPE (Personal Protective
          Equipment), If you have the means to send N95 masks to the hospital
          staff at Brookdale to help them treat covid patients
        </p>
        <a>Please Click here To Send an N95</a>
        <Link to='/'>Return Home</Link>
      </Container>
    </Grid.Column>
  </Grid>
)

export default N95
