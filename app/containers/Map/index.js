/**
 *
 * Map
 *
 */

import React, { memo } from 'react';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectSaga';
import makeSelectMap from './selectors';
import Header from '../../components/Header';
import mapReducer from './reducer';
import mapSaga from './saga';

export function Map({app, map}) {
  return (
    <div>
          <Helmet>
                <title>Map</title>
                <meta name="description" content="Description of Map" />
          </Helmet>
          <Header/>
    </div>
  );
}

Map.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  map: makeSelectMap(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ key: 'map', reducer: mapReducer }),
  injectSaga({ key: 'map', saga: mapSaga }),
  withConnect,
  memo,
)(Map);
