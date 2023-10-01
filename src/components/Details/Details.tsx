import { Redirect } from "react-router-dom";
import { Repo } from "../../types/Repo";
// styles
import { StyledSection } from "./styles";

type Props = {
  selectedRepo: Repo | null;
};

export const Details = ({ selectedRepo }: Props) => {
  if (selectedRepo) {
    return (
      <StyledSection>
        <div className="Details__profile">
          <img
            src={selectedRepo.owner.avatar_url}
            alt={`${selectedRepo.name} avatar`}
          />

          <strong>{selectedRepo.owner.login}</strong>
        </div>

        <div className="Details__info">
          <h2>Owner:</h2>

          <ul>
            <li>
              Name: {' '} <strong>{selectedRepo.name}</strong>
            </li>
            <li>
              Url:{" "}
              <a
                href={selectedRepo.owner.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {selectedRepo.owner.html_url}
              </a>
            </li>
          </ul>

          <hr />

          <h2>Repository:</h2>

          <ul>
            <li>
              Repository ame: <strong>{selectedRepo.name}</strong>
            </li>
            <li>
              Description: <strong>{selectedRepo.description}</strong>
            </li>
            <li>
              Url:{" "}
              <a href={selectedRepo.html_url} target="_blank" rel="noreferrer">
                {selectedRepo.html_url}
              </a>
            </li>
            <li>
              Stars: <strong>{selectedRepo.stargazers_count}</strong>
            </li>
          </ul>

          <hr />
        </div>
      </StyledSection>
    );
  }

  return <Redirect to="/" />;
};
