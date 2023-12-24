import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div>
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="150"
      visible={true}
    />
  </div>
);

export { Loader };
