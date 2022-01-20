import { get, post, put, del } from './index'

const getUsers = (params: any) => get('/users', params)

export { getUsers }
