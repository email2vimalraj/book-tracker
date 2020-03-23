import Head from 'next/head'
import { UserProvider } from '../utils/user'
import Header from './Header'

export default ({ title, user, loading = false, children }) => {
  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <title>Book Tracker{title ? ` - ${title}` : ''}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </UserProvider>
  )
}
