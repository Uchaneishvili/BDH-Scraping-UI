import React, { FC, useState } from 'react'
import { Form, Row, Col, Button, Modal } from 'antd'
import Search from 'antd/lib/input/Search'
import { ColumnProps } from 'antd/lib/table/Column'
import {
  crawlTherapists,
  generateCSV,
} from '../../../services/therapistService'
import { ITherapist } from '../../../types/therapist'
import Loading from '../../../components/Loading/Loading'

interface IProps {
  onSubmit: (query: any) => void
  columns: ColumnProps<any>[]
  reset: () => void
}

const TherapistListFilter: FC<IProps> = (props) => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ITherapist[]>([])
  const handleSubmit = () => {
    const values = form.getFieldsValue()
    props.onSubmit({
      searchKey: values.search,
    })
  }

  const handleReset = () => {
    form.resetFields()
    props.reset()
  }

  const downloadCSV = async () => {
    try {
      const response: any = await generateCSV(data)
      const blob = new Blob([response.data], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'therapists.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.log('Error while downloading CSV', err)
    }
  }
  return (
    <>
      <Form form={form}>
        <Row>
          <Col>
            <Form.Item name='search'>
              <Search
                onSearch={handleSubmit}
                enterButton
                placeholder={'pleaseTypeToSearch'}
              />
            </Form.Item>
          </Col>
          <Col style={{ marginLeft: '5px' }}>
            <Button type='primary' onClick={() => handleReset()}>
              {'reset'}
            </Button>
          </Col>
          <Col flex='auto'></Col>

          <Col>
            <Button
              type='primary'
              onClick={async () => {
                try {
                  setLoading(true)
                  await crawlTherapists().then((e) => {
                    props.reset()
                    setData(e.data.data)
                    setLoading(false)
                    setVisible(true)
                  })
                } catch (err) {
                  console.log('Error while crawling therapists', err)
                }
              }}
            >
              {'CSV'}
            </Button>
          </Col>
        </Row>
      </Form>
      <Modal
        open={visible}
        title={'Download CSV'}
        closable={false}
        onCancel={() => setVisible(false)}
        onOk={async () => {
          await downloadCSV()
        }}
      ></Modal>
      {loading && (
        <Loading text='We are currently updating data to generate the CSV file. This process may take a few minutes.' />
      )}
    </>
  )
}

export default TherapistListFilter
