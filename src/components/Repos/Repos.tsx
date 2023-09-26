import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";
import "./Repos.scss";

type Props = {
  selectedName: string | null;
  setSelectedRepo: (value: string) => void;
};

type Repositories = {
  name: string;
  description: string;
}[];

export const Repos = ({ selectedName, setSelectedRepo }: Props) => {
  const { isLoading, value, error } = useFetch<Repositories>(`${selectedName}/repos`);

  console.log(error);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {value !== null && (
            <div className="Repos">
              {value.map((repo) => (
                <article className="Repos__article" onClick={() => setSelectedRepo(repo.name)}>
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
