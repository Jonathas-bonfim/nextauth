import { useContext, useEffect } from 'react';
import { AuthContext } from '../hooks/contexts/AuthContext'
import { api } from '../services/api';

export default function Dashboard() {
  useEffect(() => {
    api.get('/me').then((response) => console.log(response));
  }, [])
  const { user } = useContext(AuthContext);
  return (
    <h1>Dashboard: {user?.email} </h1>
  )
}