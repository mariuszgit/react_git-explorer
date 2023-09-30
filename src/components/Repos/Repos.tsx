import { Redirect } from "react-router-dom";
// components
import { Loader } from "../Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
// styles
import { StyledArticle, StyledSection } from "./styles";
import { useEffect, useMemo } from "react";
import { NotificationModal } from "../Notification/Notification";
// types
import { Repo } from "../../types/Repo";
import { SortBy } from "../../types/SortBy";
import { User } from "../../types/User";
// helper
import { sortDescriptions } from "../../helpers/sortDescription";

type Props = {
  selectedUser: User | null;
  setSelectedRepo: (value: Repo) => void;
  selectedRepo: Repo | null;
  sortBy: SortBy;
  grid: boolean;
  reset: () => void;
};

export const Repos = ({
  selectedUser,
  setSelectedRepo,
  selectedRepo,
  sortBy,
  grid,
  reset,
}: Props) => {
  const { isLoading, value, error } = useFetch<Repo[] >(
    `${selectedUser?.login}/repos`
  );

  const SortedRepos = useMemo(() => {
    if (value !== null && Array.isArray(value)) {
      switch (sortBy) {
        case "title":
          return [...value].sort((a, b) => a.name.localeCompare(b.name));
        case "description":
          return [...value].sort(sortDescriptions);
        default:
          return value;
      }
    }
    return value;
  }, [sortBy, value]);

  useEffect(() => {
    if (!selectedUser) {
      reset();
    }
  });

  if (SortedRepos?.length === 0)
    return (
      <p>{`Sorry. ${selectedUser?.login} does not have any repositories`}</p>
    );

  if (error) return <NotificationModal error={error.message} />;

  if (selectedUser) return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {SortedRepos !== null && (
              <StyledSection $grid={grid}>
                {SortedRepos?.map((repo: Repo) => (
                  <StyledArticle
                    $active={repo.name === selectedRepo?.name}
                    onClick={() => setSelectedRepo(repo)}
                    key={repo.id}
                  >
                    <header>
                      <img
                        src={repo.owner.avatar_url}
                        alt={`${repo.owner.login} avatar`}
                      />
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
                        Created at:{" "}
                        <strong>
                          {repo.created_at.slice(0, 10).replaceAll("-", ".")}
                        </strong>
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

  return <Redirect to="/" />;
};
