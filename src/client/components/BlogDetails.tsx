import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import { IBlog, ITag } from '../utils/interfaces';

export interface BlogDetailsProps {
    blog: IBlog,
    tags: ITag[]
}

const BlogDetails: React.SFC<BlogDetailsProps> = ({ blog, tags }) => {
    return (
        <div className="card mb-3 shadow" >
            <div className="card-img-top mx-auto" style={{ maxWidth: '542px' }}>
                <img src="/images/airport-woman-det.jpg" className="card-img-top" style={{ maxWidth: '542px', maxHeight: '200px' }} alt="blog-image" />
                <div className="col">
                    <div className="card-body">
                        <h4 className="card-title">{blog.title}</h4>
                        {tags.map(tag => (
                            <span key={`tag-${tag.id}`} className="badge badge-warning badge-pill m-1">{tag.name}</span>
                        ))}
                        <p className="card-text mt-3">{blog.content}</p>
                        <p className="text-muted">{moment(blog._created).format('MM DD YYYY')}</p>
                        <Link to="/" className="btn btn-primary btn-block m-1 shadow-sm">Back To Blog Feed</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;