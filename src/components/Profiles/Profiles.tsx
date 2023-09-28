import { Dispatch, SetStateAction, useEffect } from "react";
// types
import { User } from "../../types/User";
import { useFetch } from '../../hooks/useFetch';
//components
import useLocalStorage from "../../hooks/usLocalStorage";
// styles
import { StyledArticle, StyledSection } from './styles';

type Props = {
    userName: string;
  setSelectedName: Dispatch<SetStateAction<string | null>>;
  selectedName: string | null;
};

export const Profiles = ({ selectedName, setSelectedName, userName }: Props) => {
    const { isLoading, value, error } = useFetch<User>(userName);

  const { array, addItem, removeItem } = useLocalStorage("myNames");
  useEffect(() => {
    console.log(value);
    if (value?.login) {
        addItem(value)
    }
  }, [value])
  console.log(selectedName);
  return (
    <>
      {array.length > 0 && (
        <StyledSection className="History">
          {array.map((el: User) => (
            <StyledArticle active={selectedName === el.login}>
              <article onClick={() => setSelectedName(el.login)}>
                <div className="content">
                  <img
                    src={el.avatar_url}
                    alt={`${el.login} avatar`}
                    className="image"
                  />

                  <div className="info">
                    <strong>{el.login}</strong>
                    <span>{el.url}</span>
                  </div>
                </div>
                <hr />
                <div className="footer">
                  <span>
                    Followers: <strong>{el.followers}</strong>
                  </span>

                  <span>
                    Following: <strong>{el.following}</strong>
                  </span>
                </div>
              </article>
            </StyledArticle>
          ))}
        </StyledSection>
      )}
    </>
  );
};
