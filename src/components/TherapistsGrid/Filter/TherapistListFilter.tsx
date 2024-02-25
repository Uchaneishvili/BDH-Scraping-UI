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
        <Row gutter={24}>
          <Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }}>
            <Form.Item name='search'>
              <Search
                onSearch={handleSubmit}
                enterButton
                placeholder={'pleaseTypeToSearch'}
              />
            </Form.Item>
          </Col>
          <Col {...ColProps} xl={{ span: 4 }} md={{ span: 6 }} sm={{ span: 8 }}>
            <Button type='primary' onClick={() => handleReset()}>
              {'reset'}
            </Button>
          </Col>
          <Col flex='auto'></Col>

          <Col flex='100px'>
            <Button
              type='primary'
              icon={<PlusOutlined />}
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
