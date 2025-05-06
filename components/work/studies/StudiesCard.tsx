import Link from "next/link";
import { VscCode, VscCalendar, VscGithub } from "react-icons/vsc";

type StudiesCardProps = {
	description: string;
	name: string;
	language: string;
	html_url: string;
	created_at: string;
	node_id: string;
};

const StudiesCard: React.FC<StudiesCardProps> = ({
	name,
	language,
	html_url,
	created_at,
	description,
}) => {
	const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<Link
			href={html_url || "#"}
			target="_blank"
			rel="noopener noreferrer"
			className="block font-thin p-6 rounded-lg hover:bg-gray-100/70 transition ease-in-out duration-200 border dark:hover:bg-gray-600/10"
		>
			<div className="flex flex-col space-y-4">

				<div className="flex justify-between items-start gap-3">
					<h3 className="text-xl font-semibold">
						{name}
					</h3>
					<VscGithub className="w-5 h-5 flex-shrink-0 mt-1" />
				</div>

				<p className="text-base leading-relaxed">
					{description || "No description available."}
				</p>

				<div className="flex flex-wrap justify-between items-center gap-y-2 gap-x-4 pt-4 mt-auto">

					<div className="inline-flex items-center gap-1.5 text-xs font-medium">
						<VscCode aria-hidden="true" className="w-4 h-4 opacity-70" />
						<span className="border
                            px-2 py-0.5
                            rounded-full
                        ">
							{language ? (language === "C" ? "C Language" : language) : "N/A"}
						</span>
					</div>

					<div className="flex items-center gap-1.5 text-xs">
						<VscCalendar aria-hidden="true" className="w-4 h-4" />
						<span>{formattedDate}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default StudiesCard;
