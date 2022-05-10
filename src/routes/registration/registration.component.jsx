import Tabs from  'react-bootstrap/Tabs';
import Tab from  'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '../../components/table.component';

const Registration = () => {
    const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    
  ]

return(<div className = "Container"><Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
<Tab eventKey="home" title="Todos">
 <div>prueba</div>
</Tab>
<Tab eventKey="profile" title="Detalle">
<div><Table data={dataTable} column={column} /></div>
</Tab>

</Tabs>
</div>);
}
export default Registration