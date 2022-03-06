/**
 *
 * MapPage
 *
 */
import React, { memo } from 'react';
import DeckGL from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer, PathLayer } from '@deck.gl/layers';
import styled from 'styled-components';

const INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 20,
  maxPitch: 89,
  bearing: 0,
};
interface Props {}

export const MapPage = memo((props: Props) => {
  const showBorder = false;
  const tileLayer = new TileLayer({
    // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
    data: [
      'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
    ],

    // Since these OSM tiles support HTTP/2, we can make many concurrent requests
    // and we aren't limited by the browser to a certain number per domain.
    maxRequests: 20,

    pickable: true,
    onViewportLoad: null,
    autoHighlight: false,
    highlightColor: [60, 60, 60, 40],
    // https://wiki.openstreetmap.org/wiki/Zoom_levels
    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,
    zoomOffset: devicePixelRatio === 1 ? -1 : 0,
    renderSubLayers: props => {
      const {
        bbox: { west, south, east, north },
      } = props.tile;

      return [
        new BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north],
        }),
        showBorder &&
          new PathLayer({
            id: `${props.id}-border`,
            visible: props.visible,
            data: [
              [
                [west, north],
                [west, south],
                [east, south],
                [east, north],
                [west, north],
              ],
            ],
            getPath: d => d,
            getColor: [255, 0, 0],
            widthMinPixels: 4,
          }),
      ];
    },
  });

  return (
    <Div>
      <DeckGL
        layers={[tileLayer]}
        views={new MapView({ repeat: true })}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      ></DeckGL>
    </Div>
  );
});

const Div = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  height: 100%;
`;
