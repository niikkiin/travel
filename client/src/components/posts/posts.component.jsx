import React, {Suspense} from 'react';

// styled components
import { PostsContainer } from 'components/posts/posts.styles';

// components
// import PostItem from 'components/post-item/post-item.component';
const PostItem = React.lazy(() => import('components/post-item/post-item.component'));

const Posts = ({ posts }) => {
	return (
		<PostsContainer>
			<Suspense fallback={<div>Loading...</div>}>
				<PostItem posts={posts} />
			</Suspense>
		</PostsContainer>
	);
};

export default Posts;
