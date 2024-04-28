import { ref, toRefs } from 'vue';
import useDictStore from '@/stores/dict'
import { getDicts } from '@/api';
/**
 * 获取字典数据
 */
export function useDict(...args: any) {
  const res = <any>ref({});
  return (() => {
    args.forEach((dictType: string) => {
      res.value[dictType] = [];
      const dicts = useDictStore().getDict(dictType);
      if (dicts) {
        res.value[dictType] = dicts;
      } else {
        getDicts(dictType).then(resp => {
          res.value[dictType] = resp.rows.map((p: any) => ({ dictLabel: p.dictLabel, dictValue: p.dictValue, label: p.dictLabel, value: p.dictValue, elTagType: p.listClass, elTagClass: p.cssClass }))
          useDictStore().setDict(dictType, res.value[dictType]);
        })
      }
    })
    return toRefs(res.value);
  })()
}

export function getDict(type: any) {
  let dict = useDict(type)
  return dict[type]
}