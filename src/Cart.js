import React from 'react';
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux';

const Cart = (store) => {
    
    
    return (
        <div>
            <Table responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>변경</th>
                <th>수량</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{store.props[0].id}</td>
                    <td>{store.props[0].name}</td>
                    <td><button onClick={() => { store.dispatch({ type: 'increment', id: store.props[0].id})}}>+</button></td>
                    <td><button onClick={() => { store.dispatch({ type: 'decrement', id: store.props[0].id})}}>-</button></td>
                    <td>{store.props[0].quan}</td>
                </tr>
                <tr>
                    <td>{store.props[1].id}</td>
                    <td>{store.props[1].name}</td>
                    <td><button onClick={() => { store.dispatch({ type: 'increment', id: store.props[1].id})}}>+</button></td>
                    <td><button onClick={() => { store.dispatch({ type: 'decrement', id: store.props[1].id})}}>-</button></td>
                    <td>{store.props[1].quan}</td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
};

function getConent(state) {
    return {
        props: state
    }
}

export default connect(getConent)(Cart);