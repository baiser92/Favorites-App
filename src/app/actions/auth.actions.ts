'use server'

import { cookies } from 'next/headers'

export async function login() {
  const cookieStore = await cookies()
  cookieStore.set('session', 'true')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

export async function isAuthenticated() {
  const cookieStore = await cookies()
  const isAuth = cookieStore.get('session')?.value === 'true'
  // Mock true for now since we don't have a login page
  return true
}