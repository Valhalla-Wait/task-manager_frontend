import { NextPageAuth } from 'shared/types/auth/authPage';
import { MainLayout } from 'components/layouts/mainLayout';

const ProjectsPage: NextPageAuth = () => {
  return (
    <MainLayout>
      <div>Projects</div>
    </MainLayout>
  );
};

ProjectsPage.isOnlyAuth = true;

export default ProjectsPage;
