import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
        <p>
            ₹{props.amount}
            -
            {moment(props.createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem;