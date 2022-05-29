import Head from "next/head";
import Image from "next/image";
import React from "react";

function Photo({ photos }) {
  return (
    <div className="container">
      <Head>
        <title>Next Js Demo</title>
        <meta
          name="description"
          content="This is a demo app of NextJs's all methods"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        {photos.map((photo, id) => (
          <div key={id} className="col-4">
            <h2>{photo.author}</h2>
            <Image
              loader={() => photo.url}
              src={photo.url}
              alt={photo.author}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://picsum.photos/v2/list`);

  const photos = await response.json();

  return {
    props: {
      photos,
    },
  };
}

export default Photo;
