import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Router from '@/Router';

function App() {
  const router = createHashRouter(
    createRoutesFromElements(<Route path="*" element={<Router />} />)
  );

  return <RouterProvider router={router} />;
}

export default App;
