import * as React from 'react';
import { useState, useEffect } from 'react';
import { ITag, IBlog } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router';
import { json, User } from '../utils/api';
import { Editor } from '@tinymce/tinymce-react';
// import tinymce from 'tinymce/tinymce'

export interface EditProps extends RouteComponentProps<{ id: string }> {

}

const Edit: React.SFC<EditProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')
    const [selectedTag, setSelectedTag] = useState<string>('0');
    const [tags, setTags] = useState<ITag[]>([]);
    const [blog, setBlog] = useState<IBlog[]>([]);
    const [newContent, setNewContent] = useState<string>('');

    useEffect(() => {
        if (!User || User.role !== 'admin') {
            props.history.push('/login')
        }
    }, []);

    useEffect(() => {
        (async () => {
            try {
                let blog = await json(`/api/blogs/${props.match.params.id}`);
                setBlog(blog);
                setTitle(blog[0].title);
                setContent(blog[0].content);
                let tags = await json(`/api/tags`);
                setTags(tags);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await json(`/api/blogs/${props.match.params.id}`, 'PUT', { title, content });
            await json(`/api/blogtags/${props.match.params.id}`, 'PUT', { tagid: selectedTag });
        } catch (error) {
            console.log(error);
        }
        props.history.push(`/${props.match.params.id}/details`);
    }

    const handleEditorChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        try {
            setNewContent(newContent);
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <section className="row justify-content-center mt-5">
            <form className="col-md-6 form-group p-3 shadow">
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
                {/* <textarea
                    id="textarea"
                    value={content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                    className="form-control"
                    rows={10}
                /> */}
                <Editor
                    id='textarea'
                    apiKey='6zjx9k2kve59xrax5s11zbhzutae2s757qh81ow46whorwtr'
                    initialValue="<p>This is the initial content of the editor</p>"
                    value={content}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                             alignleft aligncenter alignright alignjustify | \
                             bullist numlist outdent indent | removeformat | help'
                    }}
                    onChange={handleEditorChange}
                    // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                />

                <button
                    onClick={handleEdit}
                    className="btn btn-primary btn-block mt-3 shadow-lg">Edit Post</button>
            </form>
        </section>
    );
}

export default Edit;