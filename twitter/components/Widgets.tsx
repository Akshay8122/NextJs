import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className=" hidden px-2 mt-2 col-span-2 lg:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5 text-gray-400 shrink-0" />
        <form>
          <input
            type="text"
            placeholder="Search Twitter"
            className="flex-1 outline-none bg-transparent"
          />
          <button hidden type="submit"></button>
        </form>
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="tomcruise"
        options={{ height: 2000 }}
      />
    </div>
  );
}

export default Widgets;
