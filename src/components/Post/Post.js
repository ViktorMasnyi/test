import React from 'react';
import dateConvert from '../../helpers/dateConvert'

import './Post.css';

const post = (props) => (
    <tr className="Post" onClick={props.clicked}>
        <td>{props.title}</td>
        <td className="Info">
            <div className="Author">{props.author}</div>
        </td>
        <td><a href={props.url}>link to article</a></td>
        <td>{dateConvert(props.createdAt)}</td>
    </tr>
);

export default post;