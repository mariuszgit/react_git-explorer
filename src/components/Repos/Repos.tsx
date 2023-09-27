import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";
import "./Repos.scss";

import { Repo } from "../../types/Repo";

type Props = {
  selectedName: string | null;
  setSelectedRepo: (value: string) => void;
};

export const Repos = ({ selectedName, setSelectedRepo }: Props) => {
  const { isLoading, value, error } = useFetch<Repo[]>(`${selectedName}/repos`);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        {value?.length === 0 && <p>Sorry. No repos here.</p>}
          {value !== null && (
            <div className="Repos">
              {value.map((repo) => (
                <article 
                  className="Repos__article"
                  onClick={() => setSelectedRepo(repo.name)}
                  key={repo.id}
                >
                    <strong>{repo.name}</strong>
                    <p>{repo.description}</p>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
