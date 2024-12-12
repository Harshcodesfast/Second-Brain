import { MainIcon } from "../icons/mainIcon";
import { TweeterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { SidebarItem } from "./sidebaritem";

export const Sidebar = function () {
  return (
    <div className="h-screen pl-8 w-72 bg-white fixed left-0 top-0">
      <div className="flex text-2xl pt-4 text-indigo-500 items-center ">
        <MainIcon />
        Second Brain
      </div>
      <div className=" pt-8 pl-4">
        <SidebarItem icon={<YoutubeIcon />} text="Youtube" />
        <SidebarItem icon={<TweeterIcon />} text="Twitter" />
      </div>
    </div>
  );
};
