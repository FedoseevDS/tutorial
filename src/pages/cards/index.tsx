import { useCallback, useState } from 'react';

import Food from '../../components/cards/adaptive/food';
import Tree from '../../components/cards/adaptive/tree';

import styles from './styles.module.scss';

const Cards = () => {
  const [food, setFood] = useState(true);
  const [tree, setTree] = useState(false);

  const handleClickFood = useCallback(() => {
    setFood(true);
    setTree(false);
  }, []);

  const handleClickLandscape = useCallback(() => {
    setFood(false);
    setTree(true);
  }, []);

  return (
    <div>
      <div className={styles.controlPanel}>
        <button disabled={food} onClick={handleClickFood}>
          Food
        </button>
        <button disabled={tree} onClick={handleClickLandscape}>
          Tree
        </button>
      </div>
      {food && <Food />}
      {tree && <Tree />}
    </div>
  );
};

export default Cards;
