export type Repo = {
    id: number
    name: string;
    full_name: string;
    description: string;
    stargazers_url: string;
    created_at: string;
    stargazers_count: string;
    message: string;
    html_url: string;
    owner: {
      avatar_url: string;
      login: string;
      html_url: string;
      followers_count: string;
      following: string;
    }
};