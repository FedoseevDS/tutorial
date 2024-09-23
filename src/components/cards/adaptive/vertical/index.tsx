import { useEffect, useState } from 'react';
import { tableBody, tableHeader } from './const';
import styles from './styles.module.scss';

const Vertical = () => {
  const [height, setHeight] = useState(window.innerHeight);

  const prepareHeader = () =>
    tableHeader.map(({ method, description, result }) => (
      <tr key={method}>
        <th>№</th>
        <th>{method}</th>
        <th>{description}</th>
        <th>{result}</th>
      </tr>
    ));

  const prepareBody = () =>
    tableBody.map(({ method, description, result }, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{method}</td>
        <td>{description}</td>
        <td>
          {result} - {height}
        </td>
      </tr>
    ));

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div style={{ height: '300px' }} className={styles.wrapper}>
      <table>
        <thead>{prepareHeader()}</thead>
        <tbody>{prepareBody()}</tbody>
      </table>
    </div>
  );
};

export default Vertical;
