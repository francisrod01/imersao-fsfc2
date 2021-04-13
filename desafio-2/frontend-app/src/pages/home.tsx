import { useEffect, useState } from 'react';
import { get }  from '../fetchers/fetchers';
import { Route } from '../types/types';

const Home = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  const getData = async () => {
    const results = await get<Route[]>('/routes');
    setRoutes(results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Imersão FullCycle</h1>
      <h2> - Desafio 2</h2>

      <table>
        <thead>
        <tr>
          <th>#Rota</th>
          <th>Início da partida (Lat/Lon)</th>
          <th>Fim da partida (Lat/Lon)</th>
        </tr>
        </thead>
        <tbody>
        {routes.map((route, _key) =>
          <tr key={_key}>
            <td>{route.title}</td>
            <td>{route.startPosition.latitude} / {route.startPosition.longitude}</td>
            <td>{route.endPosition.latitude} / {route.endPosition.longitude}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
