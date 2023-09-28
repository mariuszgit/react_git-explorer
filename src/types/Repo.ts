export type Repo = {
    id: number
    name: string;
    full_name: string;
    description: string;
    stargazers_url: string;
    created_at: string;
    owner: {
      avatar_url: string;
      login: string;
    }
};