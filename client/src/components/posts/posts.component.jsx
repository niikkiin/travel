import React, { Suspense } from 'react';

// styled components
import { PostsContainer } from 'components/posts/posts.styles';

// components
// import PostItem from 'components/post-item/post-item.component';

// lazy load
// import LazyLoad from 'react-lazyload';
// import { Spinner } from 'components/spinner/spinner.component';
import { connect } from 'react-redux';
import { Spinner } from 'components/spinner/spinner.component';

const PostItem = React.lazy(() => import('components/post-item/post-item.component'));

const Posts = ({ posts, loading }) => {
	return (
		<PostsContainer>
			{posts.map((post) => (
					<Suspense key={post.id} fallback={<Spinner />}>
					<PostItem key={post.id} {...post} /> 
					</Suspense>
			))}
		</PostsContainer>
	);
};

const mapStateToProps = ({ isImageLoaded: { loading } }) => ({
	loading,
});

export default connect(mapStateToProps)(Posts);
