import { Dispatch, SetStateAction, useEffect } from "react";
// types
import { User } from "../../types/User";
import { useFetch } from '../../hooks/useFetch';
//components
import useLocalStorage from "../../hooks/usLocalStorage";
import usLocalStorage from "../../hooks/usLocalStorage";
// styles
import { StyledArticle, StyledSection } from './styles';
import { StyledButton } from '../../ui/ui';
import trashIcon from '../../assets/trash.svg';
import { Loader } from "../Loader";

type Props = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  setSelectedName: Dispatch<SetStateAction<string | null>>;
  selectedName: string | null;
};

export const Profiles = ({ selectedName, setSelectedName, userName, setUserName }: Props) => {
  const { isLoading, value, error } = useFetch<User>(userName);
  const { array, addItem, removeItem } = usLocalStorage("myNames");  
  console.log(array);
  console.log(`userName: ${userName}`);
  console.log(`value: ${value?.login}`)
  useEffect(() => {
    if (value !== null  && value.login) {
      console.log('added item');
        addItem(value);
        setUserName('')
    }
  }, [value]);

  return (
    <>{isLoading ? <Loader /> : (
      <>
      {array.length > 0 && (
        <StyledSection className="History">
          {array.map((el: User, index: number) => (
            <div key ={el.id} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
              <StyledArticle 
                active={selectedName === el.login}
                onClick={() => setSelectedName(el.login)}
              >
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

              </StyledArticle>

              <StyledButton 
                onClick={() => {removeItem(index)}}
              >
                <img src={trashIcon} alt="delete user" />
              </StyledButton>
            </div>
          ))}
        </StyledSection>
      )}
      </>
    )}
    </>
  );
};
