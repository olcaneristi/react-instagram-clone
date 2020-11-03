import React, { useEffect, useState } from "react"
import "./styles/index.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Loading from "./components/icons/Loading"
import Header from "./components/Header"
import { Home, Explore, Inbox, Profile, Like } from "./pages"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/inbox" component={Inbox} />
              <Route path="/explore" component={Explore} />
              <Route path="/like" component={Like} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Router>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
