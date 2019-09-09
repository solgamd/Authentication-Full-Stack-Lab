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
                let blogs = await json('/api/blogs'); //Option: put URL in a separate file in case of changes
                // let r = await fetch('/api/blogs');
                // let blogs = await r.json();
                setBlogs(blogs);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <>
            <div>
                <h2 className="row m-4 justify-content-center">My Blog Feed</h2>
            </div>
            <main className="col-10 offset-2">
            <section className="row mt-3">
                {blogs.map(blog => (
                    <BlogPreview key={`blog-${blog.id}`} blog={blog} />
                ))}
            </section>
            </main>
        </>
    )
}

export default Home;

