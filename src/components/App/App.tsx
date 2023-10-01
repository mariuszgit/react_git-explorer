import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// components
import { AppForm } from "../AppForm/AppForm";
import { Profiles } from "../Profiles";
import { Repos } from "../Repos/Repos";
import { Details } from "../Details";
// styles & images
import {
  StyledHeader,
  StyledHeroSection,
  StyledNav,
} from "./styles";
import { StyledTab, StyledButton } from '../../styles/ui'
import logo from '../../assets/logo.svg';
import drawing from "../../assets/undraw_developer2.svg";
import gridOnIcon from "../../assets/grid-on.svg";
import gridOffIcon from "../../assets/grid-off.svg";
// types
import { Repo } from "../../types/Repo";
import { User } from "../../types/User";
import { SortBy } from "../../types/SortBy";

function App() {
  const [userName, setUserName] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>("title");
  const [grid, setGrid] = useState<boolean>(false);

  const location = useLocation();

  const reset = () => {
    setUserName("");
    setSelectedUser(null);
    setSelectedRepo(null);
    location.pathname = "/";
  };

  useEffect(() => {
    location.pathname = '/'
  }, [])

  return (
    <>
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="" />
          <strong>GitExplorer</strong>
        </div>
      </StyledHeader>

      <div className="container">
        <StyledHeroSection>
          <div className="content">
            <h1>Explore Your favorite repositories</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              quod pariatur quae distinctio! Quo, ea!
            </p>

            <AppForm onFormSubmit={setUserName} reset={reset} />
          </div>

          <img
            src={drawing}
            alt="Person exploring github repositories"
            className="hero-image"
          />
        </StyledHeroSection>

        <main>
          <StyledNav>
            <div className="Nav__navbar">
              <div className="Nav__list">
                <StyledTab to="/" className="Nav__link">
                  Users
                </StyledTab>
                {selectedUser && (
                  <StyledTab to="/repos" className="Nav__link">
                    Repositories
                  </StyledTab>
                )}
                {selectedRepo && selectedUser && (
                  <StyledTab to="/details" className="Nav__link">
                    Details
                  </StyledTab>
                )}
              </div>
            </div>

            <div className="Nav__controls">
              {location.pathname === "/repos" && (
                <>
                  <StyledButton
                    onClick={() => setSortBy("title")}
                    $active={sortBy === "title"}
                  >
                    Sort by title
                  </StyledButton>

                  <StyledButton
                    onClick={() => setSortBy("description")}
                    $active={sortBy === "description"}
                  >
                    Sort by description
                  </StyledButton>
                </>
              )}

              {location.pathname !== "/details" && (
                <StyledButton onClick={() => setGrid(!grid)}>
                  <img
                    src={grid ? gridOffIcon : gridOnIcon}
                    alt="toggle grid mode"
                  />
                </StyledButton>
              )}
            </div>
          </StyledNav>

          <Switch>
            <Route exact path="/">
              <Profiles
                userName={userName}
                setUserName={setUserName}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                setSelectedRepo={setSelectedRepo}
                grid={grid}
              />
            </Route>

            <Route path="/repos">
              <Repos
                selectedUser={selectedUser}
                selectedRepo={selectedRepo}
                setSelectedRepo={setSelectedRepo}
                sortBy={sortBy}
                grid={grid}
                reset={reset}
              />
            </Route>

            <Route path="/details">
              <Details selectedRepo={selectedRepo} />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
