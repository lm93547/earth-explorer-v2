// decorate tapeimport { testLayer, testLayerAsync } from '@deck.gl/test-utils';
import { TileLayer } from '@deck.gl/geo-layers';
import { testLayer, testLayerAsync } from '@deck.gl/test-utils';
import test from 'tape-promise/tape';
var service = false;
beforeAll(async () => {
  var func = () => {
    return true;
  };
  service = await func();
});

it('registered the service', () => {
  expect(service).toBeTruthy();
});

test('GeoJsonLayer#tests', t => {
  testLayer({
    Layer: TileLayer,
    testCases: [
      // Test case 1
      {
        props: {
          data: [
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
          ],
        },
      },
    ],
  });

  t.end();
});
