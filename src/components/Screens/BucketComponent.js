import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../HelperComponents/ScaleFunctions';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

class BucketComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: 41.390205,
        longitude: 2.154007,
      },
      b: {
        latitude: 39.913818,
        longitude: 116.363625,
      },
      c: {
        latitude: -33.865143,
        longitude: 151.209900,
      },
      d: {
        latitude: 35.652832,
        longitude: 139.839478,
      },
      e: {
        latitude: 31.131087,
        longitude: -87.459254,
      },
    };
  }

  componentDidMount() {
    this.focusMap([
      markerIDs[1],
      markerIDs[2],
      markerIDs[3],
    ], true);
    animationTimeout = setTimeout(() => {
      this.focus1();
    }, timeout);
  }

  componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }

  focusMap(markers, animated) {
    console.log(`Markers received to populate map: ${markers}`);
    this.map.fitToSuppliedMarkers(markers, animated);
  }

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

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{ backgroundColor: this.props.darkerTint, textAlign: 'center', fontSize: scale(20), color: '#ffffff', paddingHorizontal: scale(8), paddingVertical: verticalScale(8) }}>
            Your Bucket List
          </Text>
          <ScrollView>
            {
              list.map((item, i) => (
                <TouchableOpacity style={ { backgroundColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: this.props.darkerTint, }} key={item.title} >
                  <View style={styles.item}>
                    <Text style={ {textAlign: 'left', fontSize: scale(14), color: this.props.darkerTint, flex:1}}>
                      {item.title}
                    </Text>
                    <View style={{width: 40, alignItems: 'flex-end', justifyContent: 'flex-end', flex:1}}>
                      <Ionicons name={'ios-arrow-forward'} size={ scale(14) } style={{ color: this.props.darkerTint }} />
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
          <Text style={{ backgroundColor: this.props.darkerTint, textAlign: 'center', fontSize: scale(20), color: '#ffffff', paddingHorizontal: scale(8), paddingVertical: verticalScale(8) }}>
            Touch to preview a destination
          </Text>
        </View>
        <View style={{flex: 1}}>
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
              <Marker identifier="Marker4" coordinate={this.state.d} />
              <Marker identifier="Marker5" coordinate={this.state.e} />
            </MapView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  item: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(8),
    flexDirection: 'row'
  },
});

const list = [
  {
    title: 'Barelona, Spain',
    identifier: "Marker1",
    icon: 'av-timer',
    region: {
      latitude: 41.390205,
      longitude: 2.154007,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  },
  {
    title: 'Bejing, China',
    identifier: "Marker2",
    icon: 'flight-takeoff',
    region: {
      latitude: 39.913818,
      longitude: 116.363625,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  },
  {
    title: 'Sydney, Australia',
    identifier: "Marker3",
    icon: 'flight-takeoff',
    region: {
      latitude: -33.865143,
      longitude: 151.209900,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  },
  {
    title: 'Toyko, Japan',
    identifier: "Marker4",
    icon: 'flight-takeoff',
    region: {
      latitude: 35.652832,
      longitude: 139.839478,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  },
  {
    title: 'Atmore, Alabma',
    identifier: "Marker5",
    icon: 'flight-takeoff',
    region: {
      latitude: 31.131087,
      longitude: -87.459254,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  },
]

BucketComponent.propTypes = {
  provider: ProviderPropType,
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  casinoColor: state.auth.casinoColor,
  casinoName: state.auth.casinoName,
  darkerTint: state.auth.darkerTint
});

export default connect(mapStateToProps)(BucketComponent);
