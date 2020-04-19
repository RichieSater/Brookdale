import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import Tilt from 'react-tilt';
import ShoePic from '../images/ShoePic.png';

const Shoe = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Tilt
          className="Tilt"
          options={{ max: 45 }}
          style={{ height: 250, width: 250 }}
        >
          <div className="Tilt-inner">
            <img
              className="Transparent"
              style={{ paddingTop: '5px' }}
              alt="logo"
              src={ShoePic}
              height={375}
            />
          </div>
        </Tilt>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container text>
          <Header as="h2">Shoe Covering</Header>
          <p class="center">
            Made of water repellent coated polypropylene material. Skid
            Resistant.
          </p>

          <a>Please Click here To Send a Shoe</a>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Shoe;
