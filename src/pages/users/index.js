import React from 'react';
import { useQuery } from 'react-query';
import Button from '../../components/buttonCta';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: 'user/data',
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
  });

  if (isLoading) {
    return <div>loading....</div>;
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-4'>
      <Button
        title={'Back To Home'}
        onClick={() => navigate('/')}
      />

      <div>
        {data.map((val, idx) => {
          return (
            <div
              className={`${idx % 2 === 0 ? 'bg-gray-200' : ''} flex w-[800px] items-center`}
              key={val.id + idx}
            >
              <div className='w-[60px]'>
                <p>{idx + 1}</p>
              </div>
              <div className='flex-1'>
                <p>{val.name}</p>
              </div>
              <div className='flex-1'>
                <p>{val.username}</p>
              </div>
              <div className='flex-1'>
                <p>{val.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
