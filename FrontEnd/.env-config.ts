/*
 * @Author: 490912587@qq.com
 * @Date: 2023-11-28 10:49:34
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2023-12-28 10:30:52
 * @FilePath: \FrontEnd\.env-config.ts
 * @Description: 
 */
/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://localhost:5005'
  },
  test: {
    url: 'http://localhost:5005'
  },
  prod: {
    url: 'http://localhost:5005/api'
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return {
    ...config,
    proxyPattern:'/api'
  };
}
