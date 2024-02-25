export interface ISearch {
  total?: number
  current?: number
  page?: number
  pageSize?: number
  showTotal?: (total: any) => string
}
