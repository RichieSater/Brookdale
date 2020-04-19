import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import Tilt from 'react-tilt';
import GownPic from '../images/GownPic.png';

const Gown = () => (
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
              src={GownPic}
              height={375}
            />
          </div>
        </Tilt>
      </Grid.Column>
      <Grid.Column width={8}>
        <Container text>
          <Header as="h2">Gown</Header>
          <p class="center">
            There are three factors that influence the selection of a gown or
            apron as PPE. First is the purpose of use. Isolation gowns are
            generally the preferred PPE for clothing but aprons occasionally are
            used where limited contamination is anticipated. If contamination of
            the arms can be anticipated, a gown should be selected. Gowns should
            fully cover the torso, fit comfortably over the body, and have long
            sleeves that fit snuggly at the wrist.
          </p>
          <p>
            Second are the material properties of the gown. Isolation gowns are
            made either of cotton or a spun synthetic material that dictate
            whether they can be laundered and reused or must be disposed. Cotton
            and spun synthetic isolation gowns vary in their degree of fluid
            resistance, another factor that must be considered in the selection
            of this garb. If fluid penetration is likely, a fluid resistant gown
            should be used. The last factor concerns patient risks and whether a
            clean, rather than sterile gown, can be used.
          </p>
          <p>
            Clean gowns are generally used for isolation. Sterile gowns are only
            necessary for performing invasive procedures, such as inserting a
            central line. In this case, a sterile gown would serve purposes of
            patient and healthcare worker protection.
          </p>
          <p>
            If you have the means to send Gowns masks to the hospital staff at
            Brookdale to help them treat covid patients
          </p>
          <a>Please Click here To Send a Gown</a>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Gown;
