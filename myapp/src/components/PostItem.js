import React from 'react';
import styles from './PostItem.css';

function PostItem(props) {
  const { title, key, category } = props.post;
  return (
    <div className={styles.normal}>
      <div onClick={() => props.sayHello(title)}>{title}</div>
      <div>category:{category}</div>
      <div>{key}</div>
    </div>
  );
}

export default PostItem;
