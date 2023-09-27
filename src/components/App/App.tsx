import { 
  Route,
  Link,
  Switch,
  Redirect, 
  useLocation
} from 'react-router-dom';
import { useState } from 'react';
// components
import { AppForm } from '../AppForm/AppForm';
import { Details } from '../Details';
import { Profiles } from '../Profiles';
// styles
import { StyledNav, StyledItem, StyledLink } from './styles';
import { Repos } from '../Repos/Repos';

function App() {
  const [userName, setUserName] = useState('');
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  
  
  const location = useLocation();
  
  const reset = () => {
    setSelectedName(null);
    setSelectedRepo(null);
    location.pathname='/';
  }

  return (
      <div className="App container">
        <header>
          <AppForm onFormSubmit={setUserName} reset={reset} />
        </header>

        <main>
          <StyledNav>
            <div className="Nav__navbar">
              <div className="Nav__list">
                  <StyledLink to="/" className="Nav__link">Users</StyledLink>
                  {selectedName && <StyledLink to="/repos" className="Nav__link">Repositories</StyledLink>}
                  {selectedRepo && <StyledLink to="/details" className="Nav__link">Details</StyledLink>}
              </div>

            </div>

            <div className="Nav__controls">
              <a href=""></a>
            </div>
          </StyledNav>

          <Switch>
            <Route exact path="/">
              <Profiles userName={userName} selectedName={selectedName} setSelectedName={setSelectedName} />
            </Route>

            <Route path="/repos">
              <Repos selectedName={selectedName} setSelectedRepo={setSelectedRepo} />
            </Route>

            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </main>
      </div>
  );
}

export default App;
