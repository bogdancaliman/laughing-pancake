import React from "react";

interface NavigationButtonProps {
  text: string;
  icon: React.ReactNode;
}

function NavigationButton({ text, icon }: NavigationButtonProps) {
  return (
    <div className="text-xl inline-flex items-center gap-2 hover:bg-slate-100 text-slate-800 px-4 py-2 rounded-full mx-2 transition ease-in-out delay-[25ms]">
      {icon}
      <span className="hidden lg:inline">{text}</span>
    </div>
  );
}

export default NavigationButton;
