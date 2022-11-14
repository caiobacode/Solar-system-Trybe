import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const text = `Planeta ${planetName}`;
    return (
      <div className="planet-card" data-testid="planet-card">
        <img className="planet-image" src={ planetImage } alt={ text } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
