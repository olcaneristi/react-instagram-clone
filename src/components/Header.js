import React from "react"
import { Home, Direct, Explore, Like, NewPost, Search, NewStory } from "./icons"

export default function header() {
  return (
    <section className="header">
      <div className="header-container">
        <a className="story-nav" href="/#">
          <NewStory width="22" height="22" />
        </a>

        <a className="header-img" href="/#">
          <img
            className="logo-img"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
            loading="lazy"
          />
        </a>
        <a className="direct-nav-active" href="/#">
          <Direct />
        </a>
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Ara" />
        </div>
        <nav className="nav-bar">
          <a className="home-nav" href="/#">
            <Home />
          </a>
          <a className="direct-nav" href="/#">
            <Direct />
          </a>

          <a className="search-nav" href="/#">
            <Search width="22" height="22" />
          </a>
          <a className="newpost-nav" href="/#">
            <NewPost width="22" height="22" />
          </a>
          <a className="explore-nav" href="/#">
            <Explore />
          </a>
          <a className="like-nav" href="/#">
            <Like />
          </a>
          <a className="profile-nav" href="/#">
            <img
              className="small-nav-img"
              src="https://pbs.twimg.com/profile_images/1288864030334091264/9QM__Gx__400x400.jpg"
              alt=""
              height="22"
              width="22"
              draggable="false"
            />
          </a>
        </nav>
      </div>
    </section>
  )
}
