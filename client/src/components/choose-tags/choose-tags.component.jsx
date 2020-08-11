import React from 'react';
import { FormInput } from 'components/form-input/form-input.component';
import {ChooseTagsContainer} from 'components/choose-tags/choose-tags.styles'

const ChooseTags = ({ formData: { tag, travelTags }, removeTag, updateQuery, keyPressed }) => {
  const TAG_MAX_LENGTH = 15; 
	return (
		<ChooseTagsContainer>
			<div className='travel-tags'>
				{travelTags.length === 10 ? <div className='tag-error'>Max of ten tags</div> : null}
				<div className='tag-input-container'>
					<FormInput
						className={travelTags.length === 10 ? 'tag-input disable' : 'tag-input '}
						disabled={travelTags.length === 10 ? true : false}
						label='Travel Tags'
						type='text'
						maxLength={TAG_MAX_LENGTH}
						onChange={updateQuery}
						onKeyPress={keyPressed}
						value={tag}
					/>

					{/* <div className={tag.length === TAG_MAX_LENGTH ? 'tag-length full-length' : 'tag-length'}>
          {tag.length} / {TAG_MAX_LENGTH}
        </div> */}
				</div>
			</div>
			<div className='tag-lists'>
				{travelTags.map((tag, i) => (
					<li className='tag-list' key={i}>
						<div className='tag-container'>{tag}</div>
						<button className='remove-mark' value={tag} onClick={removeTag}>
							&#215;
						</button>
					</li>
				))}
			</div>
		</ChooseTagsContainer>
	);
};

export default ChooseTags;
