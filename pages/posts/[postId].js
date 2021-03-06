import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Post({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1 className="container h-100">Loading...</h1>;
  }
  return (
    <div className="container my-5">
      <Head>
        <title>Post number {data.id}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h3>{data.body}</h3>
      <button
        onClick={() => router.back()}
        style={{
          fontSize: "30px",
          color: "white",
          backgroundColor: "grey",
          borderRadius: "10px",
          margin: "auto",
          marginTop: "60px",
          display: "flex",
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  //get params from url
  const { params } = context;
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${params?.postId}`
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default Post;
