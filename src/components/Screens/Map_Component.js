import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

const markerIDs = ['Marker1', 'Marker2', 'Marker3', 'Marker4', 'Marker5'];
const timeout = 4000;
let animationTimeout;

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: 41.881832,
        longitude: -87.623177,
      },
      b: {
        latitude: 40.377117,
        longitude: -105.525514,
      },
      c: {
        latitude: -33.865143,
        longitude: 151.209900,
      },
    };
  }

  componentDidMount() {
    this.focusMap([
      markerIDs[0],
      markerIDs[1],
      markerIDs[2],
    ], true);
    /*
    animationTimeout = setTimeout(() => {
      this.focus1();
    }, timeout);
    */
  }

/*
  componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }
*/

  focusMap(markers, animated) {
    console.log(`Markers received to populate map: ${markers}`);
    this.map.fitToSuppliedMarkers(markers, animated);
  }

/*
  focus1() {
    animationTimeout = setTimeout(() => {
      this.focusMap([
        markerIDs[0],
        markerIDs[4],
      ], true);

      this.focus2();
    }, timeout);
  }

  focus2() {
    animationTimeout = setTimeout(() => {
      this.focusMap([
        markerIDs[1],
        markerIDs[2],
        markerIDs[3],
      ], true);

      this.focus1();
    }, timeout);
  }
*/

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          ref={ref => { this.map = ref; }}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker identifier="Marker1" coordinate={this.state.a} />
          <Marker identifier="Marker2" coordinate={this.state.b} />
          <Marker identifier="Marker3" coordinate={this.state.c} />
        </MapView>
      </View>
    );
  }
}

MapComponent.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  }
});

export default MapComponent;
