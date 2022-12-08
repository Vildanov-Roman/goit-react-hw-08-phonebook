import { Dna } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
