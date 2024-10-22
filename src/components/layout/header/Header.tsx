"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import ProfileMenu from "@/components/ui/profileMenu/ProfileMenu";
import { IoNotificationsOutline } from "react-icons/io5";
import LookForTracks from "@/components/shared/LookForTracks";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Header = () => {
	const { data: session } = useGetMeQuery();
	const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();

  const handleProfileClick = () => {
    setIsOpenProfileMenu();
  };

	const login = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
			"_self"
		);
	};

	const logout = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
			"_self"
		);
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.logo}>
						<Link href="/">
							<FaSpotify />
						</Link>
					</div>
					<LookForTracks/>
					<div className={scss.auth}>
						{session ? (
							<>
								<button className={scss.profile}>
								<IoNotificationsOutline/>
									<div onClick={handleProfileClick}>
									<Image
										width={52}
										height={52}
										src={session.images[1].url}
										alt="avatar"
									/> 
									</div>
								</button>
								{isOpenProfileMenu && <ProfileMenu logout={logout} />}
							</>
						) : (
							<>
								<div className={scss.nonProfile}>
									<button onClick={login}>login</button>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
