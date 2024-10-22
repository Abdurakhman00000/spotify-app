"use client";
import { useEffect } from "react";
import scss from "./Footer.module.scss";
import axios from "axios";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { usePlayerStore } from "@/stores/usePlayerStore";

const Footer = () => {
	const {
		accessToken,
		trackUris,
		trackIndex,
		setAccessToken,
		setTrackIndex,
	} = usePlayerStore();

	const getAccessToken = async () => {
		const { data } = await axios.get("/api/auth/get-access-token");
		setAccessToken(data.accessToken);
	};

	useEffect(() => {
		getAccessToken();
	}, []);

	return (
		<footer className={scss.Footer} style={{ paddingBottom: "8px" }}>
			<div className={scss.container}>
				<div className={scss.content}>
					{accessToken && trackUris.length > 0 && (
						<SpotifyWebPlayer
							token={accessToken}
							uris={trackUris}
							offset={trackIndex || 0}
							callback={(state) => {
								if (state.isPlaying) {
									const activeTrackIndex = trackUris.findIndex(
										(uri) => uri === state.track.uri
									);
									setTrackIndex(activeTrackIndex);
								}
							}}
							styles={{
								activeColor: "#fff",
								bgColor: "#000",
								color: "rgba(255, 255, 255, 0.586)",
								loaderColor: "#fff",
								sliderColor: "#1cb954",
								trackArtistColor: "#ccc",
								trackNameColor: "#fff",
							}}
						/>
					)}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
