import React from "react";
import { useTranslation } from "react-i18next";

export default function Tweets() {
  let [t, i18n] = useTranslation();

  let tweets = [
    {
      userImg:
        "data:image/jpeg;base64,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",
      user: "Mo Wesam",
      userInfo: `@mosadwes99  .17 ${t("Aug")}`,
      tweet: "how are you?",
      img: "https://media.distractify.com/brand-img/K3YMRN7w7/0x0/why-does-gojo-wear-a-mask-1621289501369.png",
      comments: `10${t("K")}`,
      retweet: `15${t("K")}`,
      likes: `20${t("K")}`,
    },
    {
      userImg:
        "data:image/jpeg;base64,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",
      user: "Mo Wesam",
      userInfo: `@mosadwes99  .17 ${t("Aug")}`,
      tweet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aut earum quae doloremque quod excepturi voluptates deserunt! Laborum minima, perspiciatis rerum odio asperiores esse omnis ducimus saepe aliquam. Nostrum, animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatem quo vitae, neque ad repellendus molestiae delectus iure veniam corrupti optio voluptate tempore repudiandae officiis. Ea odio enim praesentium porro. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://fictionhorizon.com/wp-content/uploads/2023/06/Asta.jpg",
      comments: `10${t("K")}`,
      retweet: `15${t("K")}`,
      likes: `20${t("K")}`,
    },
  ];

  let [likes, setLikes] = React.useState([0]);

  let activeLikes = (index) => {
    let like = likes;
    if (like.includes(index)) {
      like = like.filter((l) => l !== index);
      setLikes(like);
    } else {
      like = [...like, index];
      setLikes(like);
    }
  };

  let activeLikesStyle = (index) => {
    if (likes.includes(index)) {
      return "text-red-500 ";
    } else {
      return "hover:text-red-500";
    }
  };

  return (
    <>
      {tweets.map((tweets, index) => (
        <div
          key={index}
          className="flex bg-white dark:bg-dim-900 border-2 border-b-0 min-h-[250px]  dark:border-dim-200 p-3"
        >
          <div>
            <div className=" bg-contain w-10 h-10 rounded-full me-2 ">
              <img className=" rounded-full" src={tweets.userImg} alt="" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="h-10 leading-loose flex items-center -ms-1 ">
              <span className="dark:text-white me-1">{tweets.user}</span>
              <span className="text-slate-500 text-sm">{tweets.userInfo}</span>
            </div>

            <div className="dark:text-white mb-2">{tweets.tweet}</div>

            <div className=" w-full ">
              <img className=" rounded-lg" src={tweets.img} alt="" />
            </div>

            <div className="flex justify-between p-3 text-gray-400">
              <div
                onClick={() => activeLikes(index)}
                className={activeLikesStyle(index)}
              >
                <i className="fa-lg fa-solid fa-heart active:scale-75 cursor-pointer transition duration-200"></i>
                <span className="text-sm ms-1 ">{tweets.likes}</span>
              </div>
              <div>
                <i className=" fa-lg fa-solid fa-comment active:scale-75 cursor-pointer transition duration-200"></i>
                <span className="text-sm ms-1">{tweets.comments}</span>
              </div>
              <div>
                <i className=" fa-lg fa-solid fa-retweet active:scale-75 cursor-pointer transition duration-200"></i>
                <span className="text-sm ms-1">{tweets.retweet}</span>
              </div>
              <div>
                <i className=" fa-lg fa-solid fa-share active:scale-75 cursor-pointer transition duration-200"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}