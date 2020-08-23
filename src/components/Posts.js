import React from "react"
import { More, Like, Comment, Direct, Save } from "./icons"

export default function posts({
  username,
  postLocation,
  caption,
  Avatar,
  postImage,
  likeCount
}) {
  return (
    <section className="posts">
      <div className="post-container">
        <header className="post-header">
          <a className="post-avatar" href="/#">
            <img
              className="avatar-xs"
              alt="ogulcan eristi"
              src={Avatar}
              height="32"
              width="32"
              draggable="false"
            />
          </a>
          <div className="username-container">
            <a className="post-username" href="/#">
              <p>{username}</p>
            </a>
            <a className="post-location" href="/#">
              <span>{postLocation}</span>
            </a>
          </div>
          <button type="button" className="post-more" href="/#">
            <More />
          </button>
        </header>
        <button className="post-content" type="button">
          <img
            className="post-image-xl"
            alt="post-content"
            src={postImage}
            loading="lazy"
          />
        </button>

        <section className="post-caption-container">
          <div className="post-action-buttons">
            <div className="button-left">
              <button type="button">
                <Like width="24" height="24" />
              </button>

              <button type="button">
                <Comment />
              </button>

              <button type="button">
                <Direct width="24" height="24" />
              </button>
            </div>
            <div className="button-right">
              <button type="button">
                <Save />
              </button>
            </div>
          </div>
          <button className="post-like-counts">
            <span>{likeCount} </span>
            {""}beğenme
          </button>
          <div className="post-caption">
            <a className="comment-username" href="/#">
              {username}
            </a>
            &nbsp;
            <span>{caption}</span>
          </div>
        </section>
      </div>
    </section>
  )
}
