import request from '@/utils/request';

export function postData(url: string, params: object) {
	return request({
		url: url,
		method: 'post',
		data: params,
	});
}


export function getData(url: string, params: object) {
	return request({
		url: url,
		method: 'get',
		params,
	});
}

/**
 * 获取上传Token
 * @param {String} parent_id
 * @param {String} type
 * @returns
 */
export function getUploadToken(parent_id:any, type = 'web') {
	return request({
		url: '/sys/storage/token',
		method: 'post',
		data: {
			parent_id,
			type
		}
	})
}

// 查询数据列表
export function listData(url: string, data: object) {
	return request({
		url: url + '/list',
		method: 'post',
		data
	})
}



// 查询数据列表
export function listAllData(url: string, data: object) {
	return request({
		url: url + '/all',
		method: 'post',
		data
	})
}

// 查询数据详细
export function getOneData(url: string, id: string) {
	return request({
		url: url + '/get',
		method: 'post',
		data: {
			id
		}
	})
}

// 新增数据
export function addData(url: string, data: object) {
	return postData(url + "/add", data)
}


// 修改数据
export function updateData(url: string, data: object) {
	return postData(url + "/update", data)
}


// 删除数据
export function delData(url: string, id: any) {
	return request({
		url: url + "/del",
		method: 'post',
		data: {
			id
		}
	})
}

// 删除数据
export function clearData(url: string) {
	return request({
		url: url + "/clear",
		method: 'post'
	})
}

// 删除数据
export function copyData(url: string, id: any) {
	return request({
		url: url + "/copy",
		method: 'post',
		data: {
			id
		}
	})
}

// 导出字典类型
export function exportData(url: string,query: any) {
    return request({
        url: url+'/export',
        method: 'get',
        params: query
    })
}


// 根据字典类型查询字典数据信息
export function getDicts(dictType: string) {
	return getData('/sys/dictData/list',{dictType:dictType})
}


// 更新状态
export function changeStatus(url: string, data: object) {
	return request({
		url: url + '/status',
		method: 'post',
		data
	})
}