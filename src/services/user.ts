import { get, post, put, del } from '@/services'

export const getNotifications = (params: any) => get('/notifications', params)

export const getUsers = (params: any) => get('/users', params)
