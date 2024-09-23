import { useCallback, useState } from 'react';

import Food from '../../components/cards/adaptive/food';
import Tree from '../../components/cards/adaptive/tree';

import styles from './styles.module.scss';
import Vertical from '../../components/cards/adaptive/vertical';

const Cards = () => {
  const [food, setFood] = useState(true);
  const [tree, setTree] = useState(false);
  const [vertical, setVertical] = useState(false);

  const handleClickFood = useCallback(() => {
    setFood(true);
    setTree(false);
    setVertical(false);
  }, []);

  const handleClickTree = useCallback(() => {
    setFood(false);
    setTree(true);
    setVertical(false);
  }, []);

  const handleClickVertical = useCallback(() => {
    setFood(false);
    setTree(false);
    setVertical(true);
  }, []);

  return (
    <div>
      <div className={styles.controlPanel}>
        <button disabled={food} onClick={handleClickFood}>
          Food
        </button>
        <button disabled={tree} onClick={handleClickTree}>
          Tree
        </button>
        <button disabled={vertical} onClick={handleClickVertical}>
          Vertical
        </button>
      </div>
      {food && <Food />}
      {tree && <Tree />}
      {vertical && <Vertical />}
    </div>
  );
};

export default Cards;
