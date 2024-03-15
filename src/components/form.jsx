import { Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import '../style/formCom.scss'
export default function FormCom () {
  const [value, setValue] = useState('')
  const inputChange = (e) => {
    console.log('改变了', e)
    setValue(e.target.value)
  }
  return (
    <div className='box'>
      <Input value={value} placeholder="请输入" onChange={inputChange} />
      <div>
        {value}
      </div>
    </div>
  )
}