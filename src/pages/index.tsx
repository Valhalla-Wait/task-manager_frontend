import { NextPageAuth } from 'shared/types/auth/authPage';
import { MainLayout } from 'components/layouts/mainLayout';
import { Projects } from 'components/Projects';

const ProjectsPage: NextPageAuth = () => {
  return (
    <MainLayout>
      <Projects />
    </MainLayout>
  );
};

ProjectsPage.isOnlyAuth = true;

export default ProjectsPage;
