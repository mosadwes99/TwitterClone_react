import DarkToggle from "./DarkToggle";
import NavIcons from "./NavIcons";
import { useTranslation } from "react-i18next";

export default function LeftSide(props) {
  let [t, i18n] = useTranslation();

  return (
    <>
      <div className="w-20 xlarge:w-1/5 flex flex-col xlarge:ps-6">
        <div className="text-center xlarge:text-start py-4 mb-4 flex flex-col">
          <i
            className="fa-3x fa-brands fa-twitter"
            style={{ color: "#1da1f2" }}
          ></i>
        </div>

        <NavIcons />

        <div className=" w-full mt-4">
          <button className="text-white active:scale-95 transition duration-200 text-xl  w-11/12 py-[9px] rounded-full bg-[#1da1f2] hidden xlarge:block">
            {t("Tweet")}
          </button>
          <button className=" m-auto active:scale-95 transition duration-200  w-[50px] h-[50px] bg-[#1da1f2] rounded-full block xlarge:hidden">
            <i className="fa-solid fa-feather" style={{ color: "white" }}></i>
          </button>
        </div>

        <div className="mt-auto mb-2 ">
          <div className="flex xlarge:justify-evenly justify-center mb-8">
            <div className='w-10 h-10 rounded-full bg-[url("/src/img/images.jpg")] bg-contain'></div>

            <div className="hidden xlarge:block">
              <span>
                <h3 className="text-md dark:text-gray-200">Mo Wesam</h3>
              </span>
              <span>
                <p className=" text-slate-500 text-sm">@mosadwes99</p>
              </span>
            </div>

            <div className="hidden xlarge:block">
              <i className="fa-solid fa-chevron-down text-black dark:text-gray-400"></i>
            </div>
          </div>

          <div className="flex flex-col xlarge:justify-between items-center p-2 justify-center ">
            <div className="dark:text-white  hidden xlarge:block">
              {t("Switch")}
            </div>
            <DarkToggle theme={props.theme} />
          </div>
        </div>

        <div className="w-full flex justify-center lg:p-4 mb-4">
          {i18n.language == "en" ? (
            <button
              className="mx-auto w-3/4 lg:w-1/2 border dark:text-white   border-yellow-600 rounded-2xl"
              onClick={() => {
                i18n.changeLanguage("ar");
                props.dir("rtl");
              }}
            >
              AR
            </button>
          ) : (
            <button
              className="mx-auto w-3/4 lg:w-1/2 border dark:text-white   border-yellow-600 rounded-2xl"
              onClick={() => {
                i18n.changeLanguage("en");
                props.dir("ltr");
              }}
            >
              EN
            </button>
          )}
        </div>
      </div>
    </>
  );
}
