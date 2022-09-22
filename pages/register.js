import React from 'react'
import { useState } from "react"

import { LockClosedIcon } from '@heroicons/react/20/solid'

const Register = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    })
    // console.log(data)
    const hendlerLogin = (e) => {
        e.preventDefault();
        console.log(e)
    }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Регистрация пользователя
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={hendlerLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="my-2 block text-center">
                  Ваш Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={data.email}
                  onChange={(e) => 
                    setData({...data,email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="my-2 block text-center">
                  Вашe Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Вашe Имя"
                  value={data.name}
                  onChange={(e) => 
                    setData({...data,name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="password" className="my-2 block text-center">
                  Пароль
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={data.confirmPassword}
                  onChange={(e) => 
                    setData({...data,password: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="password" className="my-2 block text-center">
                  Подтвердите Пароль
                </label>
                <input
                  id="confirmPassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Подтвердите Пароль"
                  value={data.confirmPassword}
                  onChange={(e) => 
                    setData({...data,confirmPassword: e.target.value})}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Регистрация
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Register
