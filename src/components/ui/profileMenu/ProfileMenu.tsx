"use client";
import { useEffect, useRef } from "react";
import scss from "./ProfileMenu.module.scss";
import { FC } from "react";
import { useHeaderStore } from "@/stores/useHeaderStore";
import Link from "next/link";

interface ProfileMenuProps {
  logout: () => void;
}

const ProfileMenu: FC<ProfileMenuProps> = ({ logout }) => {
  const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpenProfileMenu(); 
      }
    };

    if (isOpenProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenProfileMenu, setIsOpenProfileMenu]);

  return (
    <div
      ref={menuRef}
      className={
        isOpenProfileMenu
          ? `${scss.ProfileMenu} ${scss.active}`
          : `${scss.ProfileMenu}`
      }
    >
      <div className={scss.content}>
		<button>Account</button>
        <Link href="/profile">
		<button>Profile</button>
		</Link>
		<button>Settings</button>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default ProfileMenu;
