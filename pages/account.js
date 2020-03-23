import Layout from '../components/Layout'
import { useFetchUser } from '../utils/user'

export default ({}) => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading} title="My Account">
      <h1 className="text-5xl font-bold text-purple-500">My Account</h1>
    </Layout>
  )
}
