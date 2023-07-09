import HomeIcon from "../../../public/navigation/home.svg";

interface Text {
  text: string;
}

function NavigationButton({ text }: Text) {
  return (
    <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow-md">
      <div className="flex gap-2">
        <img src={HomeIcon} alt="Home" className="h-6 w-6" />
        <span className="hidden lg:inline">{text}</span>
      </div>
    </div>
  );
}

export default NavigationButton;
