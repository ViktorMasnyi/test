import React from 'react';
import dateConvert from '../../helpers/dateConvert'

import './Post.css';

const post = (props) => (
    <tr className="post" onClick={props.clicked}>
        <td className="post__title">
            {props.title}
        </td>
        <td className="post__author">
            {props.author}
        </td>
        <td className="post__link">
            <a href={props.url}>{props.url ? 'link to article' : 'no link'}</a>
        </td>
        <td className="post__date">
            {dateConvert(props.createdAt)}
        </td>
    </tr>
);

export default post;