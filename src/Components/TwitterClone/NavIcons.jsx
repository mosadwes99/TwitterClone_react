import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavIcons() {
  let [t, i18n] = useTranslation();

  let [active, setActive] = useState(0);

  let navIcon = [
    {
      name: t("Home"),
      icon: <i className="leftIcon fa-fw  fa-lg fa-solid fa-house"></i>,
    },
    {
      name: t("Explore"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-hashtag"></i>,
    },
    {
      name: t("Notifications"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-bell"></i>,
    },
    {
      name: t("Messages"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-envelope"></i>,
    },
    {
      name: t("Bookmarks"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-bookmark"></i>,
    },
    {
      name: t("Lists"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-list"></i>,
    },
    {
      name: t("Profile"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-user"></i>,
    },
    {
      name: t("More"),
      icon: <i className="leftIcon fa-fw fa-lg fa-solid fa-ellipsis"></i>,
    },
  ];

  let changeActive = (index) => {
    setActive(index);
  };

  let changeActiveStyle = (index) => {
    if (index == active) {
      return `navIcon activeIcone dark:activeIcone  `;
    } else {
      return `navIcon `;
    }
  };

  return (
    <>
      {navIcon.map((nav, index) => (
        <div
          className={`${changeActiveStyle(index)} cursor-pointer`}
          key={index}
          onClick={() => changeActive(index)}
        >
          <div className=" xlarge:mr-4 rtl:ml-4 icon  ">{nav.icon}</div>
          <span className="hidden xlarge:block  text-lg">{nav.name}</span>
        </div>
      ))}
    </>
  );
}
