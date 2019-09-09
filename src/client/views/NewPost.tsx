import * as React from 'react';
import { useState, useEffect } from 'react';
import { ITag } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';
import { json, User } from '../utils/api';

export interface NewPostProps extends RouteComponentProps { }

const NewPost: React.SFC<NewPostProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')
    const [selectedTag, setSelectedTag] = useState<string>('0');
    const [tags, setTags] = useState<ITag[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!User || User.role !== 'admin') {
            props.history.replace('/login');
        }
    }, []);

    useEffect(() => {
        (async () => {
            try {
                let tags = await json('/api/tags');
                setTags(tags);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    var saving: boolean = false; 

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let blog: { title: string, content: string, selectedTag: string } = {
            title,
            content,
            selectedTag
        };

        if(saving) return;

        try {
            saving = true;
            let posted = await json('/api/blogs', 'POST', blog);
            // await fetch('/api/blogs', {
            //     method: 'POST',
            //     headers: { "Content-type": "application/json" },
            //     body: JSON.stringify({ title, content, selectedTag })
            // });
            if (posted) {
                props.history.push(`/${posted}/details`);
            } else {
                setError(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            saving = false;
        }
    }

    return (
        <section className="row justify-content-center">
            <article className="col-8">
                <h2 className="row mt-4 justify-content-center">New Post</h2>
                <form className="form-group p-3 mt-3 shadow border rounded">
                    <label>Blog Title</label>
                    <input
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />

                    <label className="mt-4">Tag</label>
                    <select
                        className="form-control p-1 my-1"
                        value={selectedTag}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTag(e.target.value)}>
                        <option value="0">Select a tag...</option>
                        {tags.map(tag => (
                            <option key={`option-${tag.id}`} value={tag.id}>{tag.name}</option>
                        ))}
                    </select>

                    <label className="mt-4">Blog Content</label>
                    <textarea
                        value={content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                        className="form-control"
                        rows={10}
                    />

                    <button
                        onClick={handleSubmit}
                        className="btn btn-primary btn-block mt-3 shadow-lg">Create New Post</button>
                    {error ? <span className="alert alert-danger d-block mt-5">Post Failed!</span> : null}
                </form>
            </article>
        </section>
    );
}

export default NewPost;