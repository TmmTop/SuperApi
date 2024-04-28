import axios from 'axios';
import { ElLoading, ElMessage, ElMessageBox } from 'element-plus';
import { Session } from '@/utils/storage';
import { saveAs } from 'file-saver'

// 配置新建一个 axios 实例
const service = axios.create({
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		let ishttp = /^http(s)?:\/\/.*/i.test(config.url as string);
		if (!ishttp) {
			config.baseURL = import.meta.env.VITE_API_URL
		}
		// 在发送请求之前做些什么 token
		// 在发送请求之前做些什么 token
		if (Session.get('token')) {
			config.headers!['Authorization'] = `${Session.get('token')}`;
		}

		if (config.method === 'get' && config.params) {
			let url = config.url + '?';
			for (const propName of Object.keys(config.params)) {
				const value = config.params[propName];
				var part = encodeURIComponent(propName) + "=";
				if (value !== null && typeof (value) !== "undefined") {
					if (typeof value === 'object') {
						for (const key of Object.keys(value)) {
							let params = propName + '[' + key + ']';
							var subPart = encodeURIComponent(params) + "=";
							url += subPart + encodeURIComponent(value[key]) + "&";
						}
					} else {
						url += part + encodeURIComponent(value) + "&";
					}
				}
			}
			url = url.slice(0, -1);
			config.params = {};
			config.url = url;
		}
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		const res = response.data;
		if (res.code === 0 || (res.code && res.code !== 200)) {
			// `token` 过期或者账号已在别处登录
			if (res.code === 401 || res.code === 4001) {
				Session.clear(); // 清除浏览器全部临时缓存
				window.location.href = '/'; // 去登录页
				ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
					.then(() => { })
					.catch(() => { });
			}
			return Promise.reject(service.interceptors.response);
		} else {
			return response.data;
		}
	},
	(error) => {
		// 对响应错误做点什么
		if (error.message.indexOf('timeout') != -1) {
			ElMessage.error('网络超时');
		} else if (error.message == 'Network Error') {
			ElMessage.error('网络连接错误');
		} else {
			if (error.response.data) ElMessage.error(error.response.statusText);
			else ElMessage.error('接口路径找不到');
		}
		return Promise.reject(error);
	}
);

// 导出 axios 实例
export default service;


// 验证是否为blob格式
export function blobValidate(data: any) {
	return data.type !== 'application/json'
}

/**
* 参数处理
* @param {*} params  参数
*/
export function tansParams(params: any) {
	let result = ''
	for (const propName of Object.keys(params)) {
		const value = params[propName];
		var part = encodeURIComponent(propName) + "=";
		if (value !== null && value !== "" && typeof (value) !== "undefined") {
			if (typeof value === 'object') {
				for (const key of Object.keys(value)) {
					if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
						let params = propName + '[' + key + ']';
						var subPart = encodeURIComponent(params) + "=";
						result += subPart + encodeURIComponent(value[key]) + "&";
					}
				}
			} else {
				result += part + encodeURIComponent(value) + "&";
			}
		}
	}
	return result
}

// 通用下载方法
export function download(url: any, params: any, filename: any, config: any) {
	let downloadLoadingInstance = ElLoading.service({ text: "正在下载数据，请稍候", background: "rgba(0, 0, 0, 0.7)", })
	return service.post(url, params, {
		transformRequest: [(params) => { return tansParams(params) }],
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		responseType: 'blob',
		...config
	}).then(async (data: any) => {
		const isBlob = blobValidate(data);
		if (isBlob) {
			const blob = new Blob([data])
			saveAs(blob, filename)
		} else {
			const resText = await data.text();
			const rspObj = JSON.parse(resText);
			const errMsg = rspObj.msg
			ElMessage.error(errMsg);
		}
		downloadLoadingInstance.close();
	}).catch((r) => {
		console.error(r)
		ElMessage.error('下载文件出现错误，请联系管理员！')
		downloadLoadingInstance.close();
	})
}
