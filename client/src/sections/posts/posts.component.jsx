import React from 'react';
import PostItem from 'components/post-item/post-item.component';

// styled components
import { PostsContainer } from 'sections/posts/posts.styles';

const Posts = ({posts}) => {

	return (
		<PostsContainer>
			<PostItem posts={posts} />
		</PostsContainer>
	);
};

export default Posts;
