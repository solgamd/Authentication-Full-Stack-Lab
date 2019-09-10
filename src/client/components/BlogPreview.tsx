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
                <div className="row no-gutters" style={{ maxWidth: '540px' }}>
                    <div className="col-md-4">
                        <img src="/images/airport-woman-prev.jpg" className="card-img" alt="blog-image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p className="card-text font-weight-lighter font-italic">{blog.content.substring(0, 40)} ...</p>
                            <Link to={`/${blog.id}/details`} className="btn btn-primary btn-block m-1 shadow-sm">Read More</Link>
                        </div>
                        <div className="card-footer d-flex justify-content-center">
                            <p className="text-muted text-secondary">Posted on {moment(blog._created).format('MM DD YYYY')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPreview;