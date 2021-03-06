import { Link, useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'
import { ClientInfo } from '../components/ClientInfo'
import { DeleteProjectButton } from '../components/DeleteProjectButton'
import EditProjectForm from '../components/EditProjectForm'

export const Project = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  }) 
  if(loading) return <Spinner />
  if(error) return <p>Something is wrong try again..</p>



  return (
    !loading && !error && (
      <div className="mx-auto w-75 card p-5">
        <Link to='/' className='btn btn-primary d-inline ms-auto btn-sm'>Back</Link>
        <h1 className='text-center'>{data.project.name}</h1>
        <p>{data.project.description}</p>
        <p>Status: {data.project.status}</p>
        <ClientInfo client={data.project.client} />
        <EditProjectForm project={data.project} />
        <DeleteProjectButton projectId={data.project.id} />
      </div>
    )
  )
}
