import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit';

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const dispatch = useDispatch()

    const onSavePostClicked = () => {
        dispatch(
            addPost(
                {
                    id: nanoid(),
                    title,
                    content
                }
            ))
        setTitle('')
        setContent('')
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={(e)=>{e.preventDefault();onSavePostClicked()}}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="submit">Save Post</button>
            </form>
        </section>
    )
}