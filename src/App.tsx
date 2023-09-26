import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { useState } from 'react';
// components
import { AppForm } from './components/AppForm/AppForm';
import { Profiles } from './components/Profiles';
import { Details } from './components/Details';
// styles - temporary
import './App.scss';
import { Repos } from './components/Repos/Repos';

function App() {
  const [userName, setUserName] = useState('');
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);

  return (
      <div className="App container">
        <AppForm onFormSubmit={setUserName} />

        <Router>
        <main>
          <nav className="App__nav Nav">
            <div className="Nav__navbar">
              <ul className="Nav__list">
                <li className="Nav__item">
                  <Link to="/" className="Nav__link">Users</Link>
                </li>

                <li className="Nav__item">
                  {selectedName && <Link to="/repos" className="Nav__link">Repositories</Link>}
                </li>

                <li className="Nav__item">
                  {selectedRepo && <Link to="/details" className="Nav__link">Details</Link>}
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/">
              {userName && <Profiles userName={userName} setSelectedName={setSelectedName} />}
            </Route>

            <Route path="/repos">
              <Repos selectedName={selectedName} setSelectedRepo={setSelectedRepo} />
            </Route>

            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </main>
        </Router>
      </div>
  );
}

export default App;
