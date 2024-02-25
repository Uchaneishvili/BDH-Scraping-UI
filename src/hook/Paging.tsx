import { useEffect, useState } from 'react'
import { PaginationProps } from 'antd/lib/pagination'
import { TablePaginationConfig } from 'antd/lib/table'

export const PAGE_SIZE = 25

export const usePaging = (total = 0) => {
  const initialState = {
    total,
    pageSize: PAGE_SIZE,
    current: 1,
    pageSizeOptions: ['10', '25', '50', '100'],
  }
  const [pagingConfig, setPagingConfig] =
    useState<PaginationProps>(initialState)

  useEffect(() => {
    setPagingConfig((pagingConfig) => ({ ...pagingConfig, total }))
  }, [total])

  const setPaging = (pagination: TablePaginationConfig) => {
    setPagingConfig(pagination)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetPaging = () => {
    setPagingConfig(initialState)
  }

  return [
    pagingConfig.current,
    pagingConfig.pageSize,
    pagingConfig,
    setPaging,
    resetPaging,
  ] as const
}
