import { MainLayout } from "components/layouts/mainLayout"
import { Project } from "components/Projects/Project/Project"
import { NextPageAuth } from "shared/types/auth/authPage"

export const ProjectPage:NextPageAuth = () => {
    return(
        <MainLayout>
      <Project />
    </MainLayout>
    )
}

ProjectPage.isOnlyAuth = true

export default ProjectPage