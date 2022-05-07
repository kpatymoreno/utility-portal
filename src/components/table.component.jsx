import './table.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';

const Table = ({ data, column }) => {
    return (
      <ReactBootStrap.Table>
        <thead>
          <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
      </ReactBootStrap.Table>
    )
  }
  const TableHeadItem = ({ item }) => <th>{item.heading}</th>
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
  
        if(columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.') //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
        }
  
        return <td>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )
  
  export default Table