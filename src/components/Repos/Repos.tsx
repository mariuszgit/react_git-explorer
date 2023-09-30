import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";
// styles
import { StyledArticle, StyledSection } from './styles';
import { useMemo, useState } from "react";
// types
import { Repo } from "../../types/Repo";
import { SortBy } from "../../types/SortBy";
import { sortDescriptions } from "../../helpers/sortDescription";

type Props = {
  selectedName: string | null;
  setSelectedRepo: (value: Repo) => void;
  selectedRepo: Repo | null;
  sortBy: SortBy;
  grid: boolean;
};

export const Repos = ({ selectedName, setSelectedRepo, selectedRepo, sortBy, grid }: Props) => {
  const { isLoading, value, error } = useFetch<Repo[]>(`${selectedName}/repos`);
  
  console.log(sortBy)
  const sortedValues = useMemo(() => {
    if (value !== null) {
      switch (sortBy) {
        case 'title':
          return [...value].sort((a,b) => (a.name).localeCompare(b.name));
        case 'description':
          return [...value].sort(sortDescriptions);
        default:
          return value;
      }
    }
  }, [sortBy, value])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        {sortedValues?.length === 0 && <p>{`Sorry. ${selectedName} not have any repositories`}</p>}
          {sortedValues !== null && (
            <StyledSection grid={grid}>
              {sortedValues?.map((repo: Repo) => (
                <StyledArticle
                  active={repo.name === selectedRepo?.name}
                  onClick={() => setSelectedRepo(repo)}
                  key={repo.id}
                >
                  <header>
                    <img src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`} />
                    <strong>{repo.full_name}</strong>
                  </header>
                  
                  <main>
                    <span>{repo.description}</span>
                  </main>

                  <hr />

                  <footer>
                    <span>
                      Stars: <strong>{repo.stargazers_count}</strong>
                    </span>

                    <span>
                      Created at: <strong>{repo.created_at.slice(0,10).replaceAll('-', '.')}</strong>
                    </span>
                  </footer>
                </StyledArticle>
              ))}
            </StyledSection>
          )}
        </>
      )}
    </>
  );
};
