import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import NavMobile from "../mobile/navMobile/NavMobile";

interface LayoutSiteProps {
	children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
	return (
		<div className={scss.LayoutSite}>
			<Header />
			<div className={scss.content}>
				<main>{children}</main>
			</div>
			<Footer />
			<NavMobile/>
		</div>
	);
};

export default LayoutSite;
