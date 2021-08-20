import React from "react";
import { useEffect, useHistory } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../screens/Landing/Landing";

export default function MainContainer(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
}
