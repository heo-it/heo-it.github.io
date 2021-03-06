import React, { FunctionComponent } from 'react'
import PostItem from './PostItem'
import {
  PostListWrapper
} from './PostList.style'
import {
  PostListItemType
} from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({
  posts
}) {
  return (
    <PostListWrapper>
      {
        posts.map(({
          node: { id, fields: { slug }, frontmatter, timeToRead },
        }: PostListItemType) => (
          <PostItem {...frontmatter} key={id} link={slug} timeToRead={timeToRead} />
        ))
      }
    </PostListWrapper>
  )
}

export default PostList