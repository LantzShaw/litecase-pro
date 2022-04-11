/**
 * @Author Lantz
 * @Date 2022.01.07
 * @Email lantzshaw@163.com
 */

import request from '@/utils/request.backup'

/**
 * GET
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export async function get(url: string, params: any) {
  return request({
    url: url,
    params: params,
    method: 'GET',
  })
}

/**
 * POST
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export async function post(url: string, params: any) {
  return request({
    url: url,
    method: 'POST',
    data: params,
  })
}

/**
 * PUT
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export async function put(url: string, params: any) {
  return request({
    url: url,
    method: 'PUT',
    data: params,
  })
}

/**
 * DELETE
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export async function del(url: string, params: any) {
  return request({
    url: url,
    method: 'DELETE',
    params: params,
  })
}
