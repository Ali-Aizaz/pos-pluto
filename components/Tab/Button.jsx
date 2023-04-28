const Button = ({ title, tabName, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`text-xl text-center border-b-4 transition-color font-semibold duration-300 p-3 min-w-[150px] ${
        title === tabName ? "text-purple border-purple " : "text-light-gray"
      }`}
    >
      {tabName}
    </button>
  );
};

export default Button;
