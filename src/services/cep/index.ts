import axios from 'axios';
import { useQuery } from 'react-query';

export const GetAddress = (cep: string) => {
  return useQuery('address', async () => {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    const { data } = await axios.get(url);
    return data;
  });
};
