import React from "react";
import Tweets from "./Tweets";
import { useTranslation } from "react-i18next";

export default function MiddleSide() {
  let [t, i18n] = useTranslation();

  return (
    <>
      <div className="w-full xlarge:w-1/2 h-screen overflow-y-auto ">
        <div className="flex justify-between p-4 middleBoxes border-t-0">
          <div className=" text-gray-400 text-lg font-semibold">
            {t("Home")}
          </div>
          <div>
            <i
              className="fa-xl fa-brands fa-twitter"
              style={{ color: "#1da1f2" }}
            ></i>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-dim-900 border-x-2 dark:border-dim-200 block xlarge:hidden">
          <div className=" bg-slate-300 dark:bg-slate-700   rounded-full m-auto w-11/12 p-2 px-3 ">
            <label htmlFor="search">
              <i className=" text-slate-400 fa-solid fa-magnifying-glass"></i>
            </label>

            <input
              type="text"
              id="search"
              className=" searchInput"
              placeholder={t("Search")}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between h-[250px] middleBoxes p-3 ">
          <div className="flex  items-center">
            <div className='bg-[url("./img/images.jpg")] bg-contain w-10 h-10 rounded-full me-2 '></div>
            <span className=" text-slate-500">{t("What")}</span>
          </div>

          <div className="flex justify-between py-3">
            <div>
              <span>
                <i
                  className="mx-1 fa-lg fa-solid fa-image"
                  style={{ color: "#1da1f2" }}
                ></i>
              </span>

              <span>
                <i
                  className="mx-1 fa-lg fa-solid fa-image"
                  style={{ color: "#1da1f2" }}
                ></i>
              </span>

              <span>
                <i
                  className="mx-1 fa-lg fa-solid fa-image"
                  style={{ color: "#1da1f2" }}
                ></i>
              </span>

              <span>
                <i
                  className="mx-1 fa-lg fa-solid fa-image"
                  style={{ color: "#1da1f2" }}
                ></i>
              </span>

              <span>
                <i
                  className="mx-1 fa-lg fa-solid fa-image"
                  style={{ color: "#1da1f2" }}
                ></i>
              </span>
            </div>

            <div>
              <button className=" m-auto w-[50px] h-[50px] bg-[#1da1f2] rounded-full block xlarge:hidden">
                <i
                  className="fa-solid fa-feather"
                  style={{ color: "white" }}
                ></i>
              </button>

              <button className="text-white text-xl  py-[9px] px-[30px] rounded-full bg-[#1da1f2] hidden xlarge:block">
                {t("Tweet")}
              </button>
            </div>
          </div>
        </div>

        <div className="middleBoxes p-3 text-center text-[#1da1f2]  ">
          {t("Show")}
        </div>

        <Tweets />

        <div className="bg-white dark:bg-dim-900 border-2 border-t-8 border-b-0 dark:border-dim-200 p-3 flex justify-center">
          <div className="w-10 h-10 border-4 rounded-full border-gray-400 border-e-[#1da1f2] animate-spin-fast"></div>
        </div>
      </div>
    </>
  );
}
