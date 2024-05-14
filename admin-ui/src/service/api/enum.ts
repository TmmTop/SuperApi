/*
 * @Author: 490912587@qq.com
 * @Date: 2024-01-10 16:24:10
 * @LastEditors: 490912587@qq.com
 * @LastEditTime: 2024-05-14 15:46:49
 * @FilePath: \admin-ui\src\service\api\enum.ts
 * @Description: 
 */
import { request } from '../request';
// 获取所有枚举类型
export const getEnumTypeList = async () => {
  const result = await request<any>({ url: '/default/Enum/EnumTypeList' });
  return result;
};
// 通过枚举类型名称获取枚举值
export const getEnumDataByTypeName = async (typeName: string) => {
  const result = await request<any>({ url: '/default/Enum/EnumDataList', params: { EnumName: typeName } });
  return result;
};