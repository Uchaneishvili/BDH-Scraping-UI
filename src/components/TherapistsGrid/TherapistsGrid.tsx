import { Table } from 'antd'
import React from 'react'
import TherapistListFilter from './Filter/TherapistListFilter'
import { ITherapist, ITherapistFilter } from '../../types/therapist'
import { getTherapists } from '../../services/therapistService'
import { useList } from '../..//hook/TableDataLoader'
import { ColumnProps } from 'antd/es/table'

function TherapistsGrid() {
  const columns: ColumnProps<ITherapist>[] = [
    {
      title: 'firstName',
      dataIndex: 'firstName',
      sorter: true,
    },
    {
      title: 'lastName',
      dataIndex: 'lastName',
      sorter: true,
    },
    {
      title: 'zipCode',
      dataIndex: 'zipCode',
      sorter: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
      sorter: true,
    },
    {
      title: 'email',
      dataIndex: 'email',
      sorter: true,
    },
  ]
  const [list, loading, handleChange, setSearch, pagingConfig, reload] =
    useList<ITherapist, ITherapistFilter>(getTherapists, 'therapists')

  return (
    <div>
      <TherapistListFilter
        columns={columns}
        onSubmit={setSearch}
        reset={reload}
      />
      <Table
        bordered
        columns={columns}
        scroll={{ x: true }}
        onChange={handleChange}
        dataSource={list}
        pagination={pagingConfig}
        loading={loading}
        rowKey={(record: ITherapist) => record._id}
      ></Table>
    </div>
  )
}

export default TherapistsGrid
