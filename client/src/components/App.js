import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import signin from "./Signin";
import signup from './Signup';
import Notfound from './Notfound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/signup" component={signup} />
          <Route component={Notfound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
