const Button = ({ title, tabName, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`transition-color min-w-[150px] border-b-4 p-3 text-center text-xl font-semibold duration-300 ${
        title === tabName ? "border-purple text-purple " : "text-light-gray"
      }`}
    >
      {tabName}
    </button>
  );
};

export default Button;
