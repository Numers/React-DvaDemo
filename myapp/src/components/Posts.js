import React from 'react';
import styles from './Posts.css';

import PostItem from './PostItem';

function Posts(props) {
  return (
    <div className={styles.normal}>
      <h1>Posts</h1>
      <div>loading:{props.loading + ''}</div>
      <div>
        {
          props.posts.map(post => <PostItem key={post.key} post={post} {...props} />)
        }
      </div>
    </div>
  );
}

export default Posts;
