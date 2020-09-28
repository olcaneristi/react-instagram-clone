import React from "react"
import { Link } from "react-router-dom"
import { Home, Direct, Explore, Like, NewPost, Search, NewStory } from "./icons"

export default function header() {
  return (
    <section className="header">
      <div className="header-container">
        <a className="story-nav" href="/#">
          <NewStory width="22" height="22" />
        </a>

        <Link className="header-img" to="/">
          <img
            className="logo-img"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
            loading="lazy"
          />
        </Link>
        <Link className="direct-nav-active" to="/inbox">
          <Direct />
        </Link>
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Ara" />
        </div>
        <nav className="nav-bar">
          <Link className="home-nav" to="/">
            <Home />
          </Link>
          <Link className="direct-nav" to="/inbox">
            <Direct />
          </Link>

          <Link className="search-nav" to="/#">
            <Search width="22" height="22" />
          </Link>
          <Link className="newpost-nav" to="/#">
            <NewPost width="22" height="22" />
          </Link>
          <Link className="explore-nav" to="/explore">
            <Explore />
          </Link>
          <Link className="like-nav" to="/like">
            <Like />
          </Link>
          <Link className="profile-nav" to="/profile">
            <img
              className="small-nav-img"
              src="https://pbs.twimg.com/profile_images/1288864030334091264/9QM__Gx__400x400.jpg"
              alt=""
              height="22"
              width="22"
              draggable="false"
            />
          </Link>
        </nav>
      </div>
    </section>
  )
}
