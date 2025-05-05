export interface GithubDataProps {
  stargazers_count: number;
  description: string;
  name: string;
  language: string;
  html_url: string;
  created_at: string;
  node_id: string;
}
const getRepos = async (): Promise<GithubDataProps[]> => {
  const response = await fetch("https://api.github.com/users/sabir222/repos", {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw Error("failed to fetch Repositories");
  }
  const data = response.json();

  return data;
};

export default getRepos;
