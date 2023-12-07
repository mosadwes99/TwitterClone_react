import React from "react";
import { useTranslation } from "react-i18next";

export default function RightSide() {
  let [labelStyle, setLabelStyle] = React.useState(false);
  let [t, i18n] = useTranslation();

  let inputLabelOnFocus = () => {
    setLabelStyle(true);
  };

  let inputLabelDeFocus = () => {
    setLabelStyle(false);
  };

  let inputLabelStyle = () => {
    if (labelStyle) {
      return "text-dim-50";
    } else {
      return "text-slate-400";
    }
  };

  return (
    <>
      <div className="hidden xlarge:block w-[30%]">
        <div className=" bg-slate-300 mb-4  dark:bg-slate-700 w-4/5 px-4 p-1.5 rounded-full m-auto mt-4 ">
          <label htmlFor="search" className={inputLabelStyle()}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>

          <input
            type="text"
            id="search"
            className="searchInput"
            placeholder={t("Search")}
            onFocus={inputLabelOnFocus}
            onBlur={inputLabelDeFocus}
          />
        </div>

        <div className="flex flex-col rounded-lg gap-[2px]  bg-white dark:bg-dim-400 mb-4 dark:text-white w-4/5 mx-auto overflow-hidden text-black ">
          <div className="dark:bg-dim-700 bg-slate-200 text-[0.9rem]  p-3">
            {t("What")}
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <p className="text-[1rem]">#Free_Palestine</p>
            <p className="text-black/60 dark:text-white/60 text-xs px-1">
              {`29.7${t("K")} ${t("Tweets")}`}
            </p>
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <p className="text-[1rem]">#Free_Palestine</p>
            <p className="text-black/60 dark:text-white/60 text-xs px-1">
              {`154.6${t("K")} ${t("Tweets")}`}
            </p>
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <p className="text-[1rem]">#Free_Palestine</p>
            <p className="text-black/60 dark:text-white/60 text-xs px-1">
              {`894.7${t("K")} ${t("Tweets")}`}
            </p>
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <p className="text-sm text-dim-100 hover:underline cursor-pointer">
              {t("ShowMore")}
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-lg gap-[2px] bg-white dark:bg-dim-400  dark:text-white w-4/5 mx-auto overflow-hidden text-black ">
          <div className="dark:bg-dim-700 bg-slate-200 text-[0.9rem]  p-3">
            {t("Who")}
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <div className="flex xlarge:justify-between px-2 justify-center">
              <div className="flex gap-2">
                <div className='w-10 h-10 rounded-full bg-[url("/src/img/images.jpg")] bg-contain'></div>

                <div className="hidden xlarge:block">
                  <span>
                    <h3 className="text-md dark:text-gray-200">Mo Wesam</h3>
                  </span>
                  <span>
                    <p className=" text-slate-500 text-sm">@mosadwes99</p>
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <button className="text-dim-100 active:scale-90 transition duration-200 p-1 px-3 border rounded-full border-dim-100">
                  {t("Follow")}
                </button>
              </div>
            </div>
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <div className="flex xlarge:justify-between px-2 justify-center">
              <div className="flex gap-2">
                <div className='w-10 h-10 rounded-full bg-[url("/src/img/images.jpg")] bg-contain'></div>

                <div className="hidden xlarge:block">
                  <span>
                    <h3 className="text-md dark:text-gray-200">Mo Wesam</h3>
                  </span>
                  <span>
                    <p className=" text-slate-500 text-sm">@mosadwes99</p>
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <button className="text-dim-100 active:scale-90 transition duration-200 p-1 px-3 border rounded-full border-dim-100">
                  {t("Follow")}
                </button>
              </div>
            </div>
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3 px-5 flex gap-4">
            <div className="h-10 w-10 rounded-full  bg-slate-400  animate-pulse"></div>

            <div className="py-1 flex flex-col gap-2">
              <div className="h-6  rounded-md w-52 bg-slate-400 animate-pulse"></div>
              <div className="h-6  rounded-md w-40 bg-slate-400 animate-pulse"></div>
              <div></div>
            </div>
          </div>

          <div className="dark:bg-dim-700 bg-slate-200 p-3">
            <p className="text-sm text-dim-100 hover:underline cursor-pointer">
              {t("ShowMore")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
