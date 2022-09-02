import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { NoMatch } from './components/NoMatch';

import { CalcTool } from './components/CalcTool';
import { calcToolStore } from './stores/calcToolStore';
import { ColorTool } from './components/ColorTool';
import { colorToolStore } from './stores/colorToolStore';
import { CarTool } from './components/CarTool';
import { carToolStore } from './stores/carToolStore';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/calc-tool" element={
          <Provider store={calcToolStore}>
            <CalcTool />
          </Provider>
        } />
        <Route path="/color-tool" element={
          <Provider store={colorToolStore}>
            <ColorTool />
          </Provider>            
        } />
        <Route path="/car-tool" element={
          <Provider store={carToolStore}>
            <CarTool />
          </Provider>
        } />
        <Route path="*" element={<NoMatch />}></Route>
      </Route>
    </Routes>
  );
}
