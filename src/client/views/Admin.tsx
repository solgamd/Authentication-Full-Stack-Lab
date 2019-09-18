import * as React from 'react';
import { useState } from 'react';
import { IBlog } from '../utils/interfaces';
import { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { json, User } from '../utils/api';

export interface AdminProps extends RouteComponentProps{ }

const Admin: React.FC<AdminProps> = (props) => {

    const [blogs, setBlogs] = useState<IBlog[]>([])

    const getBlogs = async () => {
        try {
            let blogs = await json('/api/blogs');
            setBlogs(blogs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!User || User.role !== 'admin') {
            props.history.push('/login');        
        } else {
            getBlogs();
        }
    }, []);

    const deleteBlog = async (id: number) => {
        try {
            await json(`/api/blogs/${id}`, 'DELETE');
            getBlogs();
            alert('Blog post deleted!')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="row justify-content-center my-2">
            <article className="col-md-8">
            <h2 className="row m-3 justify-content-center text-secondary" >Admin Options</h2>
                <ul className="list-group my-5">
                    {blogs.map(blog => (
                        <li key={`blog-${blog.id}`} className="list-group-item d-flex align-items-center justify-content-between m-1 rounded shadow">
                            <span>{blog.title}</span>
                            <div>
                                <Link
                                    to={`/${blog.id}/edit`}
                                    className="btn btn-primary btn-small mx-1"
                                >Edit</Link>
                                <button
                                    onClick={() => deleteBlog(blog.id)}
                                    className="btn btn-secondary btn-small mx-1"
                                >Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
}

export default Admin;