import React from 'react';
import styled from 'styled-components';
import GlobalStyles from "./components/globalStyles";

import { Button, PrimaryButton } from "./components/primaryButton/button";
import GridParent from "./components/grid/gridParent";
import GridChild from "./components/grid/gridChild";
import Typography from "./components/type";
import { media } from "./components/utils/mediaQueries";
import './App.css';

interface headerProps {
  phone: string,
  tablet: string,
  desktop: string,
}

const HeaderResponsive = styled.h3`
  ${media.phone`color: green;`}
  ${media.tablet`color: red;`}
  ${media.desktop`color: purple;`}
`;

const App: React.FC = () => {
  return (
    <main className="home">
      <GlobalStyles/>
      <section>
        <h2>Primary Button Samples</h2>
        <p>
          <strong>Props :</strong> radius, disabled , size, color
        </p>
        <div className="buttonWrapper">
          <PrimaryButton as={Button} size="sm" color="blue">
            Primary
          </PrimaryButton>
          <PrimaryButton as={Button} size="md" color="blue">
            Primary
          </PrimaryButton>
          <PrimaryButton as={Button} size="lg" color="blue">
            Primary
          </PrimaryButton>
          <PrimaryButton as={Button} size="lg" color="blue" disabled>
            Disabled
          </PrimaryButton>
        </div>
      </section>
      <hr></hr>

      <section>
        <h2>Grid System Samples</h2>
        <p>
          <strong>Props :</strong> bgColor, phone , tablet, desktop
        </p>
        <GridParent gridTemplateColumns={12} bgColor="blueviolet">
          <GridChild as="span" desktop={2} bgColor="aqua">
            <img src="https://placeimg.com/550/550/any"/>
            <p>2 column div on desktop</p>
          </GridChild>
          <GridChild desktop={2} bgColor="aqua">
            <img src="https://placeimg.com/550/550/any"/>
            <p>2 column div on desktop</p>
          </GridChild>
          <GridChild desktop={2} bgColor="aqua">
            <img src="https://placeimg.com/550/550/any"/>
            <p>2 column div on desktop</p>
          </GridChild>
          <GridChild desktop={2} bgColor="aqua">
            <img src="https://placeimg.com/550/550/any"/>
            <p>2 column div on desktop</p>
          </GridChild>
          <GridChild desktop={2} bgColor="aqua">
            <img src="https://placeimg.com/550/550/any"/>
            <p>2 column div on desktop</p>
          </GridChild>
          <GridChild desktop={2} bgColor="aqua">
            <img src="https://placeimg.com/550/550/any"/>
            <p>2 column div on desktop</p>
          </GridChild>
        </GridParent>
      </section>
      <hr></hr>

      <section>
        <h2>Media Queries Utility</h2>
        <p>
          <strong>Props :</strong> phone , tablet, desktop
        </p>
        <HeaderResponsive>
          Bacon ipsum dolor amet ground round cow short ribs ham hock boudin buffalo, kielbasa drumstick beef ribs. Pancetta chicken venison, flank short ribs turducken ham hock prosciutto. Salami boudin ball tip capicola, venison landjaeger buffalo swine short loin pastrami jerky. Shoulder sausage rump tongue ball tip brisket drumstick pastrami beef ribs turkey cow pork belly filet mignon hamburger ribeye. Short ribs spare ribs tri-tip kielbasa turducken chuck.
        </HeaderResponsive>
      </section>
      <hr></hr>

      <section>
        <h2>Typography</h2>
        <p>
          <strong>Props :</strong> component, variant, flush
        </p>
        <Typography component="h1" variant="display-1">
          Hey there!
        </Typography>
        <Typography component="h2" variant="display-2">
          Hey there!
        </Typography>
        <Typography component="h3" variant="body-1-bold">
          Hey there!
        </Typography>
      </section>
    </main>
  );
}

export default App;
