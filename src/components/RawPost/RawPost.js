import React from 'react';

import './RawPost.css';

const RawPost = (props) => (
  <div className="rawPost">
    <div className="rawPost__content">{JSON.stringify(props.selectedPost)}</div>
    <button
      className="rawPost__dismiss"
      onClick={props.postDismissHandler}
    >
      X
    </button>
  </div>
);

export default RawPost;
