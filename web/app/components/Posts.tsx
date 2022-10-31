import { NextPage } from "next";
import React from "react";
import axios from "axios";
import useSWR, { useSWRConfig } from 'swr'
// recoil
import { useRecoilValue } from "recoil";
import tokenState from "../recoil/atoms/tokenState";

interface Post {
    id: number,
    title: string,
    caption: string
}

function Posts() {
    const { mutate } = useSWRConfig()
    const token = useRecoilValue(tokenState); // RecoilのTokneを取得する

    const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_REST_URL}/posts/`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            <h2>投稿一覧</h2>            
            {data &&
                data.map((post: Post, index: number) => (
                <div key={index}>
                    <span>{post.id}</span>
                    <span>{post.title}</span>
                    <span>{post.caption}</span>
                    <button onClick={ async ()=>{
                        await axios.delete(`${process.env.NEXT_PUBLIC_REST_URL}/posts/`+ post.id,{
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        });
                        mutate(`${process.env.NEXT_PUBLIC_REST_URL}/posts/`)
                    }}>削除</button>
                </div>
            ))}
        </>
    )
}
export default Posts;
