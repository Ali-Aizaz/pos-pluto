import {
  ButtonComponent,
  LabeledInputComponent,
  SubmitResetButtonComponent,
} from "@/components";
import { useState } from "react";

export default function Add() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log("update");
    router.push("/home");
  };

  const handleReset = () => {};

  return (
    <form>
      <div className="w-full py-4 flex flex-col text-lg font-medium gap-y-7">
        <label className="text-2xl text-theme-text-gray">
          Product details:
        </label>

        <LabeledInputComponent
          value={name}
          setValue={setName}
          placeholder="name"
          extraCss={"w-[400px]"}
        />
        <div className="flex ">
          <LabeledInputComponent
            value={category}
            setValue={setCategory}
            placeholder="Category"
            extraCss={"w-[400px]"}
          />
          <button
            type="button"
            className="text-5xl -translate-y-1 translate-x-2"
          >
            +
          </button>
        </div>
      </div>
      <div className="w-full py-4 border-t-4 mt-10 flex flex-col text-lg font-medium gap-y-7">
        <label className="text-2xl text-theme-text-gray">
          Product details:
        </label>

        <LabeledInputComponent
          value={name}
          setValue={setName}
          placeholder="Quantity"
          extraCss={"w-[400px]"}
        />
        <div className="flex ">
          <LabeledInputComponent
            value={category}
            setValue={setCategory}
            placeholder="Warranty"
            extraCss={"w-[120px]"}
          />
          <button type="button" className="text-2xl translate-x-2">
            Months
          </button>
        </div>
      </div>
      <SubmitResetButtonComponent onReset={handleReset} />
    </form>
  );
}
