interface Text {
  text: string;
}

function NavigationButton({ text }: Text) {
  return (
    <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow-md">
      {text}
    </div>
  );
}

export default NavigationButton;
