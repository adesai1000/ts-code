import React from 'react'
import { PostProps } from './types/types'

export const PostCard = (props: PostProps) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}
