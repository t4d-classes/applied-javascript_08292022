import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);
root.render(<>
  <ColorTool colors={colorList} />
  <CarTool />
</>);
