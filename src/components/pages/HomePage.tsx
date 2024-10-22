import HomeSection from "./homeSections/HomeSection";
import PlayList from "./homeSections/PlayList";
const HomePage = () => {
	return (
		<section style={{display: 'flex', alignItems: "center"}}>
			<PlayList />
			<HomeSection/>
		</section>
	);
};
export default HomePage;
