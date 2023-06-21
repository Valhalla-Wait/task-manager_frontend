import styles from './projectCard.module.scss';

export const ProjectCard = ({
  title,
  owned,
  usersCount,
  description,
}: {
  title: string;
  owned?: boolean;
  usersCount: number;
  description: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {owned && <div className={styles.owned}>Owned</div>}
        <div>Users: {usersCount}</div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
