import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((item) => {
          const itemName = item.name
          const itemImg = item.image
          return (
            <PlanetCard key={ itemName } planetName={ itemName } planetImg={ itemImg } />
          )}
        )}
      </div>
    );
  }
}

export default SolarSystem;
