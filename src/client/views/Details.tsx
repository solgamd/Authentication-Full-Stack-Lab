import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IBlog, ITag } from '../utils/interfaces';
import BlogDetails from '../components/BlogDetails';
import { json } from '../utils/api';

export interface DetailsProps extends RouteComponentProps<{ id: string }> { }

const Details: React.SFC<DetailsProps> = props => {

    const [blog, setBlog] = useState<IBlog>({
        id: 0,
        title: '',
        content: '',
        _created: new Date(),
        name: ''
    });

    const [tags, setTags] = useState<ITag[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let data = await json(`/api/blogs/${props.match.params.id}`);
                setBlog(data[0]);
                setTags(data[1][0]);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [props.match.params.id]);

    return (
        <section className="row mt-5 justify-content-center">
            <BlogDetails blog={blog} tags={tags} />
        </section>
    );
}

export default Details;