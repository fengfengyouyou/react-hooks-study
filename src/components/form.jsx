import { Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import '../style/formCom.less'
import classNames from 'classnames'
export default function FormCom ({submit}) {
  const [value, setValue] = useState('')
  const inputChange = (e) => {
    console.log('改变了', e)
    setValue(e.target.value)
  }
  const addClick = () => {
    submit(value)
    setValue('')
  }
  return (
    <div className={classNames({'form-box': true})}>
      <Input value={value} placeholder="请输入" onChange={inputChange} className='add-input' />
      <Button className='add-btn' onClick={addClick}>添加</Button>
    </div>
  )
}