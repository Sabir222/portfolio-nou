function Footer() {
	const currentYear = new Date().getFullYear(); // Get the current year dynamically

	return (
		<footer className="font-thin text-center">
			Sabir Koutabi © {currentYear}
		</footer>
	);
}

export default Footer;
