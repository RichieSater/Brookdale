import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import Tilt from 'react-tilt';
import FaceShieldPic from '../images/FaceShieldPic.png';

const FaceShield = () => (
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
              src={FaceShieldPic}
              height={375}
            />
          </div>
        </Tilt>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container text>
          <Header as="h2">Face Shield</Header>
          <p class="">
            Face shields are personal protective equipment devices that are used
            by many workers (e.g., medical, dental, veterinary) for protection
            of the facial area and associated mucous membranes (eyes, nose,
            mouth) from splashes, sprays, and spatter of body fluids. Face
            shields are generally not used alone, but in conjunction with other
            protective equipment and are therefore classified as adjunctive
            personal protective equipment. Although there are millions of
            potential users of face shields, guidelines for their use vary
            between governmental agencies and professional societies and little
            research is available regarding their efficacy.
          </p>
          <p>
            FaceShield's are an important component of Brookdale's PPE (Personal
            Protective Equipment), If you have the means to send FaceShield
            masks to the hospital staff at Brookdale to help them treat covid
            patients
          </p>
          <a>Please Click here To Send an FaceShield</a>
          <p>
            Unlike other PPE, Face Shields can be 3D printed. If you own a 3D
            printer or are connected to a maker space
          </p>
          <p></p>
          <a>
            Please Click here to join a special program that let's you
            contribute directly to the fight free of charge
          </a>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default FaceShield;
