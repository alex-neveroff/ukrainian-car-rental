import { Slider } from 'components';

import {
  AboutHeader,
  AboutText,
  SliderWrapper,
  AboutLink,
} from './About.styled';

const About = () => {
  return (
    <section>
      <AboutHeader>Ukrainan car rental</AboutHeader>
      <SliderWrapper>
        <AboutText>
          Rent a car in Ukraine with us and open up new horizons of freedom. A
          wide selection of cars, convenient conditions and competitive prices
          await you. Travel around Ukraine with comfort and confidence!
        </AboutText>
        <Slider />
      </SliderWrapper>
      <AboutLink to="/catalog">Choose your car {'->'}</AboutLink>
    </section>
  );
};

export default About;
