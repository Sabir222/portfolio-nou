import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";

const HeroSection = () => {
	return <section>
		<div className="justify-between py-4 h-40 flex flex-row" >
			<div className="w-2/3 py-2 px-2 lg:px-0">
				<p className="font-bold lg:text-[45px] text-2xl">Sabir Koutabi</p>
				<p className="font-extralight lg:text-[25px] text-xl mb-4">full stack developer</p>
				<p className="font-light"> I like building digital things that are simple, honest, and actually useful.</p>
			</div>
			<div className="w-1/3 flex items-center justify-center">
				<Avatar className="w-28 h-28">
					<AvatarImage src="/profile-image-3.png"
						alt="Profile image"
						className="object-cover"
					/>
					<AvatarFallback>SK</AvatarFallback>
				</Avatar>
			</div>
		</div>
	</section>
}

export default HeroSection;
