import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DataModel from './Datamodel';
import SecondPageComponent2 from './SecondPageComponent2';

function SecondPageComponent1() {
  const [data, setData] = useState<DataModel[]>([]);

  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/random_ten`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const columns = [
    { field: 'id', headerName: 'Id', width: 100 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'setup', headerName: 'Setup', width: 300 },
    { field: 'punchline', headerName: 'Punchline', width: 300 }
  ];

  return (
    <div className='component1'>
      <h2>Component 1</h2>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} />
      </div>
      <SecondPageComponent2 />
    </div>
  );
}

export default SecondPageComponent1;


//  import { useState, useEffect } from 'react';
//  import DataModel from './Datamodel';
// import SecondPageComponent2 from './SecondPageComponent2'
 
//  function SecondPageComponent1() {
//    const [data, setData] = useState<DataModel[]>([]);

//    useEffect(() => {
//      fetch(`https://official-joke-api.appspot.com/random_ten`)
//        .then(response => response.json())
//        .then(data => setData(data));
//    }, []);

//    return (
//      <div className='component1'>
//        <h2>Component 1</h2>
     
// <table>
//   <tr>
//     <th>Type</th>
//     <th>Setup</th>
//     <th>Punchline</th>
//     <th>Id</th>
//   </tr>
//   <tbody>
//            {data.map(item => (
//              <tr key={item.id}>
//                <td>{item.type}</td>
//                <td>{item.setup}</td>
//                <td>{item.punchline}</td> 
//                <td>{item.id}</td>
//              </tr>
//            ))}
//          </tbody>
// </table>
// <SecondPageComponent2/>
//        </div>
     
//    );
//  }

//  export default SecondPageComponent1;
