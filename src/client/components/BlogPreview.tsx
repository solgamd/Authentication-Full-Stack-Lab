import * as React from 'react';
import * as moment from 'moment';
import { IBlog } from '../utils/interfaces';
import { Link } from 'react-router-dom';

export interface BlogPreviewProps {
    blog: IBlog
}

const BlogPreview: React.SFC<BlogPreviewProps> = ({ blog }) => { //destructuring blog to pass props more easily
    return (
        <div>
            <div className="card m-3 mt-8 shadow">
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text font-weight-lighter font-italic">{blog.content.substring(0, 20)} ...</p>
                    <Link to={`/${blog.id}/details`} className="btn btn-primary btn-block m-1 shadow-sm">Read More</Link>
                </div>
                <div className="card-footer">
                    <p className="text-muted">Posted on {moment(blog._created).format('MM DD YYYY')}</p>
                </div>
            </div>
        </div>
    );
}

export default BlogPreview;