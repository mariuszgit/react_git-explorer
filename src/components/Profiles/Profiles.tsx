import { useFetch } from "../../hooks/useFetch";
// components
import { Loader } from '../Loader';
import './Profiles.scss';

type Props = {
    userName: string;
    setSelectedName: (value: string) => void;
}

type User = {
    name: string;
    login: string;
    avatar_url: string;
    bio: string;
    location: string;
    url: string;
    followers: number;
    following: number;
}

export const Profiles = ({ userName, setSelectedName }: Props) => {
    const { isLoading, value, error } = useFetch<User>(userName);
    console.log(isLoading, value);
    return (
        <>
        {isLoading ? (
            <Loader />
        ) : (
            <>
            {value && (
                <div className="Profiles">
                <div 
                  className="Profiles__item"
                  onClick={() => setSelectedName(value.login)}
                >
                    <img src={value?.avatar_url} alt="" className="Profiles__icon" />

                    <div className="Profiles__info">
                        <strong>{value.login}</strong>
                        <p>{value?.url}</p>

                        <div className="Profiles__boxes">
                            <div>
                                <strong>Followers</strong>
                                {value.followers}
                            </div>

                            <div>
                                <strong>Following</strong>
                                {value.following}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            )}
            </>
            
        )}
        </>

    );
}