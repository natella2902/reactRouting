import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import Edit from "./edit";
import Stats from "./stats";

const Dashboard = () => {
  return (
      <>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to={"/dashboard"}> Stats </Link>
          </li>
          <li><Link to={"/dashboard/edit"}> Edit </Link></li>
        </ul>
        <Switch>
          <Route path={"/dashboard"} exact component={ Stats }/>
          <Route path={"/dashboard/edit"} component={ Edit }/>
        </Switch>
      </>
  )
}

export default Dashboard