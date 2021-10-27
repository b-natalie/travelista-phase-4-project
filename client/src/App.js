// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticatedApp from "./components/AuthenticatedApp";
import TripsPage from "./components/TripsPage";
import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, []);

  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Switch>
  //         <Route path="/testing">
  //           <h1>Test Route</h1>
  //         </Route>
  //         <Route path="/trips">
  //           <TripsPage />
  //         </Route>
  //         <Route path="/">
  //           <h1>Page Count: {count}</h1>
  //           <button class="ui button">Click Here</button>
  //         </Route>
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );

  if(!authChecked) { return <div></div>}
  return (
    <Route>
      { currentUser ? (
          <AuthenticatedApp setCurrentUser={setCurrentUser} currentUser = {currentUser}/>
        ) : (
          <UnauthenticatedApp setCurrentUser={setCurrentUser}/>
        )
      }
    </Route>
  )
}

export default App;
