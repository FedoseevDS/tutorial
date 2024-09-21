import styles from './styles.module.scss';

const Tree = () => (
  <section>
    <div className={styles.row}>
      <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
        <div className={styles.card}>
          <div className={`${styles.cover} ${styles['item-a']}`}>
            <h1>
              Little
              <br />
              Bonsai
            </h1>
            <span className={styles.price}>$79</span>
            <div className={styles['card-back']}>
              <a href="#">Add to cart</a>
              <a href="#">View detail</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
        <div className={styles.card}>
          <div className={`${styles.cover} ${styles['item-b']}`}>
            <h1>
              Tropical
              <br />
              Leaf
            </h1>
            <span className={styles.price}>$35</span>
            <div className={styles['card-back']}>
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['col-md-4']} ${styles['col-sm-6']} ${styles['col-xs-12']}`}>
        <div className={styles.card}>
          <div className={`${styles.cover} ${styles['item-c']}`}>
            <h1>
              Marijuana
              <br />
              Chill
            </h1>
            <span className={styles.price}>$155</span>
            <div className={styles['card-back']}>
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Tree;
