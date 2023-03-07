const Button = ({ extraCss, label, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`bg-theme-purple p-3 rounded-lg text-white font-medium ${extraCss}`}
    >
      {label}
    </button>
  );
};

export default Button;
