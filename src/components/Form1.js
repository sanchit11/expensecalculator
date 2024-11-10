//import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
//import { setMinusTotal, setTotal } from '../reduxfiles/action';

function Form1() {

  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.total);
    
  const handleRemoveItem = (index) => {
    dispatch({type: 'REMOVE_ITEM', payload: index });
    console.log('price= ', items[index].price)
    dispatch( {type:'SET_TOTAL', payload: {operation:'-', totalvalue:parseInt(items[index].price) } });
  };
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th width="80%">Item</th>
                            <th width="80%">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td  colSpan={2}>
                                {item.item}
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </td>
                        </tr>
                      ))}
                    </tbody>
                </Table>
            </div>
        );
    
}


export default Form1;