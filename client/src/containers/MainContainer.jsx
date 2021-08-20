import React from "react";
import { useEffect, useHistory } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../screens/Landing/Landing";
import ZipCodeRests from "../screens/ZipCodeRests/ZipCodeRests";

export default function MainContainer(props) {
  return (
    <Switch>
      <Route path="/zipcode/:id">
        <ZipCodeRests />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
}
