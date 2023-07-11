
import { FC } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import './App.scss';
import { router } from './router/router';
const App: FC = () => {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
