import React from 'react';
import { connect } from 'dva';
import styles from './Posts.css';

import PostsComponent from '../components/Posts';

const Posts = ({ ...props }) => {
  const propsA = {
    ...props,
    sayHello(payload) {
      console.log(payload);
    },
  };
  console.log(propsA);
  return (
    <div className="normal">
      <PostsComponent {...propsA} />
    </div>
  );
};

// function Posts(props) {
//   return (
//     <div className={styles.normal}>
//       <PostsComponent posts={props.posts} />
//     </div>
//   );
// }
/*
* TODO:test
* */
function mapStateToProps(state) {
  const { loading, posts, postsByKey } = state.posts;
  return {
    loading,
    posts: posts.map(key => ({ ...postsByKey[key], key })),
  };
}

export default connect(mapStateToProps)(Posts);
