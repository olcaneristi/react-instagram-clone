import React, { useState } from "react"
import Story from "../components/Story"
import Posts from "../components/Posts"

function Home() {
  const [posts, setPosts] = useState([
    {
      Avatar: "https://avatarfiles.alphacoders.com/145/145932.jpg",
      username: "olcaneristi",
      postLocation: "Brooklyn City",
      postImage:
        "https://papers.co/wallpaper/papers.co-mn29-bridge-city-river-night-view-nature-32-wallpaper.jpg",
      caption: "it works!",
      likeCount: "1.345"
    },
    {
      Avatar: "https://avatarfiles.alphacoders.com/145/145932.jpg",
      username: "olcaneristi",
      postLocation: "Mount Everest",
      postImage:
        "https://papers.co/wallpaper/papers.co-nw48-luca-bravo-mountain-sunset-nature-32-wallpaper.jpg",
      caption: "beauty.",
      likeCount: "3.232"
    },
    {
      Avatar: "https://avatarfiles.alphacoders.com/145/145932.jpg",
      username: "olcaneristi",
      postLocation: "Dubai",
      postImage:
        "https://papers.co/wallpaper/papers.co-nv99-city-night-light-car-dark-nature-32-wallpaper.jpg",
      caption: "wow!",
      likeCount: "4.412"
    }
  ])
  return (
    <div>
      <Story />
      {posts.map((posts, index) => (
        <Posts
          key={index}
          Avatar={posts.Avatar}
          username={posts.username}
          postLocation={posts.postLocation}
          postImage={posts.postImage}
          caption={posts.caption}
          likeCount={posts.likeCount}
        />
      ))}
    </div>
  )
}

export default Home
