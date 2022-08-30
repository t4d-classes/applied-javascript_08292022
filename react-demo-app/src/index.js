import { createRoot } from 'react-dom/client';

import { HelloWorld } from './components/HelloWorld';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);
root.render(<HelloWorld />);
