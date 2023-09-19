import Button from '../../components/buttonCta';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='border-black border-2 p-4'>
      <h4 className='border-b-2 py-2'>New Testing Example with vercel v2</h4>

      <div className='my-2 bg-slate-50'>
        <h1>Why do we need Test ? {process.env.REACT_APP_NAME}</h1>
        <p>
          To guarantee our code quality. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate qui
          doloremque magni odit quia, fugit autem. Voluptates earum at assumenda quo nulla! At illo laboriosam tenetur
          obcaecati dicta, exercitationem minima. Delectus hic nobis, ut esse veritatis quaerat deleniti porro corrupti
          dolor possimus in quas ad perferendis mollitia fuga eum obcaecati, nostrum consectetur autem nulla saepe
          soluta. Culpa repellat totam accusantium.
        </p>
      </div>
      <Button
        data-testid='goToList'
        title={'List Users'}
        onClick={() => navigate('users')}
      />

      <footer>&copy; 2021</footer>
    </div>
  );
}
