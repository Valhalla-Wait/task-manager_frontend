import { DeleteOutlined } from '@ant-design/icons';
import { projectsApi } from 'core/store/slice/porjectsApi';
import styles from './projectCard.module.scss';

export const ProjectCard = ({
  title,
  owned,
  description,
  id,
}: {
  title: string;
  owned?: boolean;
  description: string;
  id: number;
}) => {
  const [deleteProject] = projectsApi.useDeleteProjectMutation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectContent}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {owned && <div className={styles.owned}>Owned</div>}
          {/* <div>Users: {usersCount}</div> */}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          deleteProject({
            id: id,
          });
        }}
        className={styles.deleteProject}
      >
        <DeleteOutlined
          style={{
            color: 'red',
            fontSize: '28px',
          }}
          rev={'delete'}
        />
      </div>
    </div>
  );
};
