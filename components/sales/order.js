import { useState } from "react";
import InputField from "../settings/inputField";
import Button from "../button";
export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update");
    router.push("/home");
  };

  const handleReset = () => {};
  return (
    <form className="flex flex-col" onSubmit={handleUpdate}>
      <div className="w-full py-10  flex flex-col text-2xl font-medium gap-y-10">
        <label className="text-3xl text-theme-text-gray">
          Customer Details:
        </label>

        <InputField
          value={name}
          setValue={setName}
          placeholder="Name"
          extraCss={"w-[500px]"}
        />
        <InputField
          value={phone}
          setValue={setPhone}
          placeholder="Phone Number"
          extraCss={"w-[500px]"}
        />
      </div>
      <div className="w-full py-10 border-t-4 flex flex-col text-2xl font-medium gap-y-10">
        <label className="text-3xl text-theme-text-gray">
          Product Details:
        </label>

        <InputField
          value={category}
          setValue={setCategory}
          placeholder="Product Category"
          extraCss={"w-[500px]"}
        />
        <InputField
          value={productName}
          setValue={setProductName}
          placeholder="Product Name"
          extraCss={"w-[500px]"}
        />
        <InputField
          value={productName}
          setValue={setProductName}
          placeholder="Quantity"
          extraCss={"w-[150px]"}
        />
      </div>
      <div className="flex space-x-4 items-end">
        <Button
          type={"submit"}
          label="Update Security"
          extraCss={"w-[250px] text-xl"}
        />
        <button
          className="text-2xl pb-2 w-[200px] font-medium text-theme-text-gray"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
