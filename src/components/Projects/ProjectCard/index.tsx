import styles from './projectCard.module.scss';

export const ProjectCard = ({number, owned, usersCount}:{number:number, owned?: boolean, usersCount: number}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.title}>Project #{number}</h3>
                {owned && <div className={styles.owned}>Owned</div>}
                <div>Users: {usersCount}</div>
            </div>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus fugiat reprehenderit nulla placeat est nisi facere, aperiam officia optio labore amet rem quibusdam, iste veritatis velit! Totam, dolore labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus fugiat reprehenderit nulla placeat est nisi facere, aperiam officia optio labore amet rem quibusdam, iste veritatis velit! Totam, dolore labore.
            </div>
        </div>
    );
};
