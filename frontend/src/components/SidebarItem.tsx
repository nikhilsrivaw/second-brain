
import React, { ReactElement } from "react";

type SidebarItemProps = {
  text: string;
  icon: ReactElement;
};

export function Sidebaritem({ text, icon }: SidebarItemProps) {
  return <div className="flex text-gray-700 py-2 hover:bg-gray-200 rounded max-w-48 pl-4 transition-all">
    <div className="pr-2 cursor-pointer ">
     {icon} 
    </div>
    <div >
     {text}
    </div> 
     </div>;
}
