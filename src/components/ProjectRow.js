const ProjectRow = ({ project }) => {
    return (
       <div className="col-md-4">
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title text-center">{project.name}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className='d-flex text-center small'>Status: {project.status}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <a href={`projects/${project.id}`} className="btn btn-warning">View</a>
                </div>
            </div>
        </div>
       </div>
    )
}

export default ProjectRow;