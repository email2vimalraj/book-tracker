import React from 'react'
import Link from 'next/link'
import { useUser } from '../utils/user'

export default () => {
  const { user, loading } = useUser()

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>

          {!loading &&
            (user ? (
              <>
                <li>
                  <a href="/account" className="flex items-center">
                    <img
                      src={user.picture}
                      className="inline object-cover rounded-full h-10 w-10"
                      alt={user.given_name}
                    />
                    <span className="ml-2">Account</span>
                  </a>
                </li>
                <li>
                  <a href="/api/logout">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/api/login">Login</a>
                </li>
              </>
            ))}
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(2) {
          margin-right: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          background: none;
        }
      `}</style>
    </header>
  )
}
