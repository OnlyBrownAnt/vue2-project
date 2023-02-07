import { request } from '@/utils/request'
export function echo(data = {}, params = {}) {
    return request({ url: '/echo', method: 'post', params, data })
}
