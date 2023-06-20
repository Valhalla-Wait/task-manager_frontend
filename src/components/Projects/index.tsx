import Link from 'next/link';
import { ProjectCard } from './ProjectCard';
import styles from './projects.module.scss';

const projects = [
    {
        title: 'hello',
    },
    {
        title: 'sdfas',
    },
    {
        title: 'sadfggf',
    },
    {
        title: 'fdrds',
    }
]

export const Projects = () => {


    return (

        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.title}>My Projects:</h2>
            </div>
            <div className={styles.listWrapper}>
                <div className={styles.list}>
                    {projects.map((project, index) =>
                        <Link href={`/project/${index}`}>
                            <ProjectCard key={index} owned usersCount={23} number={index} />
                        </Link>)}
                </div>
            </div>
        </div>
    );
};
