import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);
root.render(<>
  <ColorTool />
  <CarTool />
</>);
