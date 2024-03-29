export const HttpMethods = {
  GET: 'get',
  HEAD: 'head',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  PATCH: 'patch',
}

export const PATHS = {
  INDEX: '/',
  HOME: '/home',
  INVENTORY: '/inventory',
  LOGIN: '/login',
  ROLES: '/roles',
  SALES: '/sales',
  SETTINGS: '/settings',
  SIGNUP: '/signup',
}

export const PROTECTED = [
  '/home',
  '/inventory',
  '/roles',
  '/sales',
  '/settings',
]

export const UNPROTECTED = ['', '/', '/signup', '/login']
