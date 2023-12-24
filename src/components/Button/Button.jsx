import css from './Button.module.css';

const Button = ({ onClickRender }) => (
  <div>
    <button type="button" onClick={onClickRender}>
      Load more
    </button>
  </div>
);

export { Button };
