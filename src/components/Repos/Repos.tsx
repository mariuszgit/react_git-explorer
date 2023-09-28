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
};

export const Repos = ({ selectedName, setSelectedRepo, selectedRepo, sortBy }: Props) => {
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
            <StyledSection>
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
                    <p>{repo.description}</p>
                  </main>

                  <hr />

                  <footer>
                    <span>
                      {/* Stars: <strong>{repo.followers}</strong> */}
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
