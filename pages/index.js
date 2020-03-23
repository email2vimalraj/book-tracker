import Layout from '../components/Layout'
import { useFetchUser } from '../utils/user'

const Home = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1 className="text-5xl font-bold text-purple-500">Book Tracker</h1>

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </Layout>
  )
}

export default Home
