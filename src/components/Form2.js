import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React , { useState, props, state }from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { setMinusTotal, setTotal } from '../reduxfiles/action';


function Form2() {
   
 
        const btnStyle = {
            marginLeft: '85%',
            textAlign: 'right', 
        };
      
        const [newItemName, setNewItemName] = useState('');        
        const [newItemPrice, setNewItemPrice] = useState(0);
        const total = useSelector((state) => state.total); // Access inputValue from the Redux state

      
        /*const [total, setTotal] = useState(0);*/

        const dispatch = useDispatch();
      
        const handleAddItem = () => {
          if (newItemName && !isNaN(newItemPrice)) {
            dispatch( {type:'ADD_ITEM', payload:{item:newItemName, price:newItemPrice}});
            dispatch( {type:'SET_TOTAL', payload: {operation:'+', totalvalue:parseInt(newItemPrice) } });
            dispatch({ type:'SET_ITEM', payload: setNewItemName('')})
            dispatch({ type:'SET_PRICE', payload: setNewItemPrice(0)})
          }
        };
      
        const handleChangeItem = (e) =>  {
          console.log(e.target.value)
          dispatch({ type:'SET_ITEM', payload: setNewItemName(e.target.value)})
        }
      
        const handleChangePrice = (e) =>  {
          dispatch({ type:'SET_PRICE', payload: setNewItemPrice(e.target.value)})
        }
      
   
     
        return (
            <div>
                <Card border="success" style={{ width: '25rem' }}>
                    <Card.Body>
                        <Form.Label htmlFor="item">Type Purchased Item</Form.Label>
                        <Form.Control type="text" id="newItemName" value={newItemName}  onChange={handleChangeItem}  />
                        <br />
                        <Form.Label htmlFor="itemprice">Type Purchased Price</Form.Label>
                        <Form.Control type="text" id="newItemPrice" value={newItemPrice}  onChange={handleChangePrice}  />
                        <br />
                        Total : {total}
                        <Button variant="outline-primary" onClick={handleAddItem} style={btnStyle}>Add</Button>{' '}
                    </Card.Body>
                </Card>


            </div>
        );
    
}


export default Form2;