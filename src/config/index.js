/**
 * 环境配置封装
 * 
 */

const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/38e1b9f7049b274bad88fe15435f9190/xzliang'
    },
    test: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/38e1b9f7049b274bad88fe15435f9190/xzliang'
    },
    prod: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/38e1b9f7049b274bad88fe15435f9190/xzliang'
    }
}
export default {
    env: 'dev',
    mock: true,
    ...EnvConfig[env]
}