import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Cards from './pages/cards';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Cards />,
        path: '/',
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
