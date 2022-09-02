import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: "red", hexcode: 'ff0000' },
  { id: 2, name: "green", hexcode: '00ff00' },
  { id: 3, name: "blue", hexcode: '0000ff' },
];

const cars = [
  { id: 1, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 120000 },
  { id: 2, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'blue', price: 45000 }
]

const root = createRoot(document.querySelector('#root'));

root.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={cars} />
  </>
);
