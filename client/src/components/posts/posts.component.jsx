import React from 'react';

// styled components
import { PostsContainer } from 'components/posts/posts.styles';

// components
import PostItem from 'components/post-item/post-item.component';

// lazy load
import LazyLoad from 'react-lazyload';
// import { Spinner } from 'components/spinner/spinner.component';
import { connect } from 'react-redux';

const Posts = ({ posts, loading }) => {
	return (
		<PostsContainer>
			{posts.map((post) => (
				<LazyLoad key={post.id} height={100} offset={[-100, 100]} placeholder={<div>Loading</div>}>
					{/* {loading ? <PostItem key={post.id} {...post} /> : <div>Loading</div>} */}
					<PostItem key={post.id} {...post} /> 
				</LazyLoad>
			))}
		</PostsContainer>
	);
};

const mapStateToProps = ({ isImageLoaded: { loading } }) => ({
	loading,
});

export default connect(mapStateToProps)(Posts);
