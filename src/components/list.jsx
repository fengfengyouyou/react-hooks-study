import '../style/list.less'
import {DeleteOutlined} from '@ant-design/icons'
export default function ListCom({list, delItem}) {
  return (
    <div className="list-box">
      <div className='list-title'>列表：</div>
      {
        list.map((item, index) => (
          <div key={item.id} className='item'>
            <div className='item-text'>{item.text}</div>
            <DeleteOutlined className='del-icon' onClick={() => delItem(item.id)}/>
          </div>
        ))
      }
    </div>
  )
}