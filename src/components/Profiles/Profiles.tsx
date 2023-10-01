/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";
// types
import { User } from "../../types/User";
import { useFetch } from "../../hooks/useFetch";
import { Repo } from "../../types/Repo";
//components
import usLocalStorage from "../../hooks/usLocalStorage";
import { NotificationModal } from "../Notification/Notification";
// styles
import { StyledArticle, StyledSection } from "./styles";
import { StyledButton } from "../../styles/ui";
import trashIcon from "../../assets/trash.svg";
import { Loader } from "../Loader";

type Props = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  selectedUser: User | null;
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
  setSelectedRepo: Dispatch<SetStateAction<Repo | null>>;
  grid: boolean;
};

export const Profiles = ({
  selectedUser,
  setSelectedUser,
  setSelectedRepo,
  userName,
  grid
}: Props) => {
  const { isLoading, value, error } = useFetch<User>(userName);
  const { array, addItem, removeItem } = usLocalStorage("myNames");

  useEffect(() => {
    if (value !== null && value.login) {
      addItem(value);
    }
  }, [value]);

  const handleProfileSelect = (el: User) => {
    setSelectedUser(el);
    setSelectedRepo(null);
  };
  
  const handleProfileDelete = (profile: User, index: number) => {
    if (profile.login === selectedUser?.login) {
      setSelectedUser(null);
    }
    removeItem(index);
  } 

  if (error) return <NotificationModal error={error.message} />;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {value?.message && <NotificationModal error={value.message} />}

          {array.length > 0 && (
            <StyledSection className="History" $grid={grid}>
              {array.map((profile: User, index: number) => (
                <div
                  key={profile.id}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <StyledArticle
                    $active={selectedUser?.login === profile.login}
                    onClick={() => {
                      handleProfileSelect(profile);
                    }}
                  >
                    <div className="content">
                      <img
                        src={profile.avatar_url}
                        alt={`${profile.login} avatar`}
                        className="image"
                      />

                      <div className="info">
                        <strong>{profile.login}</strong>
                        <span>{profile.url}</span>
                      </div>
                    </div>
                    <hr />
                    <div className="footer">
                      <span>
                        Followers: <strong>{profile.followers}</strong>
                      </span>

                      <span>
                        Following: <strong>{profile.following}</strong>
                      </span>
                    </div>
                  </StyledArticle>

                  <StyledButton
                    onClick={() => {
                      handleProfileDelete(profile, index);
                    }}
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
