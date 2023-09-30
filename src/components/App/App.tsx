import { Route, Switch, useLocation } from "react-router-dom";
import { useState } from "react";
// components
import { AppForm } from "../AppForm/AppForm";
import { Profiles } from "../Profiles";
import { Repos } from "../Repos/Repos";
import { Details } from "../Details";
// styles & images
import { StyledHeader, StyledHeroSection, StyledNav, StyledLink } from "./styles";
// import logo from "../../assets/logo.svg";
import drawing from "../../assets/undraw_developer2.svg";
import gridOnIcon from "../../assets/grid-on.svg";
import gridOffIcon from "../../assets/grid-off.svg";
// types
import { Repo } from "../../types/Repo";
import { SortBy } from "../../types/SortBy";
import { StyledButton } from "../../ui/ui";


function App() {
  const [userName, setUserName] = useState("");
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>('title');
  const [grid, setGrid] = useState<boolean>(false);

  const location = useLocation();

  const reset = () => {
    setSelectedName(null);
    setSelectedRepo(null);
    location.pathname = "/";
  };

  return (
    <>
    <StyledHeader>
        <div className="container">
          {/* <img src={logo} alt="" /> */}
          <strong>GitExplorer</strong>
        </div>
    </StyledHeader>

    <div className="App container">
      <StyledHeroSection>
        <div className="left" style={{ width: "40%" }}>
          <h1>Explore Your favorite repositories</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod pariatur quae distinctio! Quo, ea!
          </p>

          <AppForm onFormSubmit={setUserName} reset={reset} />
        </div>

        <img src={drawing} alt="Person exploring github repositories" className="hero-image" />
      </StyledHeroSection>

      <main>
        <StyledNav>
          <div className="Nav__navbar">
            <div className="Nav__list">
              <StyledLink to="/" className="Nav__link">
                Users
              </StyledLink>
              {selectedName && (
                <StyledLink to="/repos" className="Nav__link">
                  Repositories
                </StyledLink>
              )}
              {selectedRepo && (
                <StyledLink to="/details" className="Nav__link">
                  Details
                </StyledLink>
              )}
            </div>
          </div>

          <div className="Nav__controls">
            {location.pathname === '/repos' && <>
              <StyledButton
                onClick={() => setSortBy('title')}
                active = {sortBy === 'title'}
              >
                Sort by title
              </StyledButton>

              <StyledButton
                onClick={() => setSortBy('description')}
                active = {sortBy === 'description'}
              >
                Sort by description
              </StyledButton>
            </>}
            
            {location.pathname !== '/details' 
            && <StyledButton onClick={() => setGrid(!grid)}>
              <img src={(grid) ? gridOffIcon : gridOnIcon} alt="toggle grid mode" />
            </StyledButton>
            }
            
          </div>
        </StyledNav>

        <Switch>
          <Route exact path="/">
            <Profiles
              userName={userName}
              setUserName={setUserName}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
            />
          </Route>

          <Route path="/repos">
            <Repos
              selectedName={selectedName}
              selectedRepo={selectedRepo}
              setSelectedRepo={setSelectedRepo}
              sortBy={sortBy}
              grid={grid}
            />
          </Route>

          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </main>
    </div>
    </>
  );
}

export default App;
