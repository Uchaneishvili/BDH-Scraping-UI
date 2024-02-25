import { SorterResult, TablePaginationConfig } from 'antd/lib/table/interface'
import { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { ISearch } from '../types/basesearch.d'

export interface ISortParam {
  [key: string]: number | string
}

function showTotal(total: number) {
  return `${total} records`
}

export function useList<T, TSearch extends ISearch>(
  getList: (search: TSearch) => Promise<AxiosResponse<any> | null>,
  dataKey: string,
  staticFilter?: TSearch,
  fullData = false,
  noInitLoad = false
): [
  T[],
  boolean,
  (
    pagination: TablePaginationConfig,
    filter: Record<string, any>,
    sorter: SorterResult<T> | any
  ) => void,
  (customSearch: TSearch) => void,
  TSearch,
  () => void,
  any,
  (list: T[]) => void
] {
  const searchInitialParams = {
    ...(staticFilter || {}),
    total: 0,
    showTotal: showTotal,
    current: 1,
    page: 0,
    pageSize: 10,
  } as TSearch
  const [list, setList] = useState<T[]>([])
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<TSearch>(searchInitialParams)
  const [initLoad, setInitLoad] = useState(false)

  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, (string | number | boolean)[] | null>,
    sorter: SorterResult<T> | any
  ) => {
    setSearch({
      ...search,
      filters,
      current: pagination.current,
      page: (pagination.current! - 1) * pagination.pageSize!,
      pageSize: pagination.pageSize,
      sortField: sorter.field,
      sortOrder: sorter.order,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onSearch = (customSearch: TSearch) => {
    setSearch({
      ...search,
      customSearch,
      page: 0,
      current: 1,
    })
  }

  const getData = useCallback(async () => {
    setLoading(true)
    const res = await getList(search)
    if (res) {
      if (fullData) {
        setData(res.data.data)
      }
      setList(res.data.data[dataKey])
      search.total = res.data.data.totalCount
    }
    setLoading(false)
  }, [search, getList, dataKey, fullData])

  useEffect(() => {
    if (noInitLoad && !initLoad) {
      setInitLoad(true)
      return
    }
    getData()
  }, [getData, initLoad, noInitLoad])

  return [list, loading, handleChange, onSearch, search, getData, data, setList]
}
