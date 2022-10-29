import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface Post {
    id: number,
    title: string,
    caption: string
}

const options: AxiosRequestConfig = {
    url: `${process.env.NEXT_PUBLIC_REST_URL}/posts/`,
    method: "GET",
};

function Posts() {
    const [posts,setPosts] = useState<Post[]>()
    const [status, setStatus] = useState<number | null>(null);

    useEffect(() => {
        axios(options)
        .then((res: AxiosResponse<Post[]>) => {
            const { data, status } = res;
            setPosts(data);
            setStatus(status);
        })
        .catch((e: AxiosError<{ error: string }>) => {
            console.log(e.message);
        });
    }, []);

    return (
        <>
            <h2>投稿一覧</h2>
            <h3>ステータス:{status}</h3>
            {posts?.map((post: Post, index: number) => 
                <div key={index}>
                    <span>{post.id}</span>
                    <span>{post.title}</span>
                    <span>{post.caption}</span>
                </div>
            )}
        </>
    )
}
export default Posts;
