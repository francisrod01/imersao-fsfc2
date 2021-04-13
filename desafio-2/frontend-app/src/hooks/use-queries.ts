import { useState, useEffect } from 'react';

import { Route, APIResponse } from '../types/types';
import { get } from '../fetchers/fetchers';

export const useGetDailyPrices = () => {
  const [data, setData] = useState<Route[]>([]);

  const getData = async () => {
    const { results } = await get<APIResponse>('/routes');
    setData(results);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}
