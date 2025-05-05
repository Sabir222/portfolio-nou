import getRepos, { GithubDataProps } from "@/app/api/githubRepoAction";
import StudiesCard from "./StudiesCard";


const Studies = async () => {
	const data = await getRepos();
	return (
		<section className="">
			<h1 className="text-xl font-thin my-8">More projects including Alx africa projects. </h1>
			<div className="grid grid-cols-1 space-y-6 ">
				{data.map((repo: GithubDataProps) => {
					return (
						<StudiesCard
							key={repo.node_id}
							created_at={repo.created_at}
							name={repo.name}
							node_id={repo.node_id}
							description={repo.description}
							html_url={repo.html_url}
							language={repo.language}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Studies;
