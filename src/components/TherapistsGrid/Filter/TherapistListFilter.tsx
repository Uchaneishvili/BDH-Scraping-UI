import React, { FC } from 'react'
import { Form, Row, Col, Button } from 'antd'
import Search from 'antd/lib/input/Search'
import { ColumnProps } from 'antd/lib/table/Column'
import { PlusOutlined } from '@ant-design/icons'
import { crawlTherapists } from 'src/services/therapistService'

interface IProps {
  onSubmit: (query: any) => void
  columns: ColumnProps<any>[]
  reset: () => void
}

const TherapistListFilter: FC<IProps> = (props) => {
  const [form] = Form.useForm()

  const ColProps = {
    xs: 24,
    sm: 12,
  }

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
          <Col style={{ marginLeft: '10px' }}>
            <Button type='primary' onClick={() => handleReset()}>
              {'reset'}
            </Button>
          </Col>
          <Col flex='auto'></Col>

          <Col>
            <Button
              type='primary'
              onClick={async () => {
                crawlTherapists()
              }}
            >
              {'add'}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default TherapistListFilter
