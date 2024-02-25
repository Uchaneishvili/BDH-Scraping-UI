export default class FormatData {
  static generatePaginationURLPath(query: any) {
    let path = `?page=${query.page}&pageSize=${query.pageSize}`
    if (query.sortField && query.sortOrder)
      path += `&sortField=${query.sortField}&sortOrder=${query.sortOrder}`

    if (query.filters) {
      for (let key in query.filters) {
        let value = query.filters[key]
        if (value) {
          if (Array.isArray(value)) {
            value.join(',')
          }
          path += `&${key}=${query.filters[key]}`
        }
      }
    }
    if (query.customSearch) {
      for (let key in query.customSearch) {
        if (query.customSearch[key]) {
          path += `&${key}=${encodeURIComponent(query.customSearch[key])}`
        }
      }
    }
    return path
  }
}
