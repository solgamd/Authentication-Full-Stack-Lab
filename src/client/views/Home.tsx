import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/interfaces';
import BlogPreview from '../components/BlogPreview';
import { json } from '../utils/api';

export interface HomeProps { }

const Home: React.SFC<HomeProps> = () => {

    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let blogs = await json('/api/blogs');
                setBlogs(blogs);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <>
            <div>
                <h2 className="row m-4 justify-content-center text-secondary">Blog Feed</h2>
            </div>
            <main className="col">
                <section className="row my-5 justify-content-center">
                    {blogs.map(blog => (
                        <BlogPreview key={`blog-${blog.id}`} blog={blog} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Home;

