import { ButtonComponent } from "@/components";

const SubmitResetButton = ({ onReset }) => {
  return (
    <div className="flex space-x-4 items-end">
      <ButtonComponent
        type={"submit"}
        label="Update Settings"
        extraCss={"w-[250px] text-xl"}
      />
      <button className="text-xl pb-2 font-medium text-gray" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default SubmitResetButton;
