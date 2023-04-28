const Button = ({ extraCss, label, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`rounded-lg bg-purple p-3 font-medium text-white ${extraCss}`}
    >
      {label}
    </button>
  );
};

export default Button;
