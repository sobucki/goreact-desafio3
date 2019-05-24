import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import { Creators as ModalActions } from '../../store/ducks/modal';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        username: PropTypes.string,
        avatar: PropTypes.string,
        cordinates: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      }),
    ).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState(prevState => ({
      viewport: {
        ...prevState.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    }));
  };

  handleMapClick = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;
    showModal({ longitude, latitude });
    // alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    const { viewport } = this.state;
    const { users } = this.props;
    return (
      <MapGL
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={newViewPort => this.setState({ viewport: newViewPort })}
      >
        {users.map(user => (
          <Marker
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              alt={`avatar_${user.username}`}
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src={user.avatar}
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
