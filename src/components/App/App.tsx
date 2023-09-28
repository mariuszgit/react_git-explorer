import { Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
import { useState } from "react";
// components
import { AppForm } from "../AppForm/AppForm";
import { Profiles } from "../Profiles";
import { Repos } from "../Repos/Repos";
import { Details } from "../Details";
// styles & images
import { StyledHeroSection, StyledNav, StyledLink } from "./styles";
import drawing from "../../assets/undraw_developer2.svg";
// types
import { Repo } from "../../types/Repo";
import { SortBy } from "../../types/SortBy";


function App() {
  const [userName, setUserName] = useState("");
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>('title');
  console.log(selectedRepo);

  const location = useLocation();

  const reset = () => {
    setSelectedName(null);
    setSelectedRepo(null);
    location.pathname = "/";
  };

  return (
    <div className="App container">
      <StyledHeroSection>
        <div className="left" style={{ width: "40%" }}>
          <h1>Explore best repositories in world</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod pariatur quae distinctio! Quo, ea!
          </p>

          <AppForm onFormSubmit={setUserName} reset={reset} />
        </div>

        <img src={drawing} alt="Person exploring github repositories" className="hero-image" />
      </StyledHeroSection>

      <header>
        
      </header>

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

          <div className="Nav__sorting">
            Sorted by:
            {' '}
            <span onClick={() => setSortBy('title')}>Title</span>
            {' '}
            <span onClick={() => setSortBy('description')}>Description</span>
          </div>
        </StyledNav>

        <Switch>
          <Route exact path="/">
            <Profiles
              userName={userName}
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
            />
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
