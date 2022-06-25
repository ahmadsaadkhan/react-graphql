import { useQuery } from '@apollo/client'
import ProjectRow from './ProjectRow';
import { GET_PROJECTS } from '../queries/projectQueries';
import { Spinner } from './Spinner';

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS);
    if (loading) return <Spinner />;
    if (error) return <p>Error :(</p>;
    return (
        !loading && !error && (
            data.projects.length > 0 ? (
                <div className="row mt-3">
                    {data.projects.map(project => (
                        <ProjectRow key={project.id} project={project} />
                    ))}
                </div>
            ) : (<p>No Projects</p>)
        )
    );
}

export default Projects;