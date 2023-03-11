import { useState } from "react";
import {
  LabeledInputComponent,
  ButtonComponent,
  SalesItemComponent,
} from "@/components";
import { useRouter } from "next/router";

export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const router = useRouter();
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update");
    router.push("/home");
  };

  const handleReset = () => {};
  return (
    <div className="flex">
      <form className="flex flex-col w-full" onSubmit={handleUpdate}>
        <div className="w-full mb-4 flex flex-col text-lg font-medium gap-y-5">
          <label className="text-xl text-theme-text-gray">
            Customer Details:
          </label>

          <LabeledInputComponent
            value={name}
            setValue={setName}
            placeholder="Name"
            extraCss={"w-[350px]"}
          />
          <LabeledInputComponent
            value={phone}
            setValue={setPhone}
            placeholder="Phone Number"
            extraCss={"w-[350px]"}
          />
        </div>
        <div className="w-full mb-4 flex flex-col text-lg font-medium gap-y-5">
          <label className="text-3xl text-theme-text-gray">
            Product Details:
          </label>

          <LabeledInputComponent
            value={category}
            setValue={setCategory}
            placeholder="Product Category"
            extraCss={"w-[350px]"}
          />
          <LabeledInputComponent
            value={productName}
            setValue={setProductName}
            placeholder="Product Name"
            extraCss={"w-[350px]"}
          />
          <div className="flex space-x-4">
            <LabeledInputComponent
              value={quantity}
              setValue={setQuantity}
              placeholder="Quantity"
              extraCss={"w-[150px]"}
            />
            <div className="flex flex-col text-white  gap-y-1">
              <button
                type="button"
                onClick={() => setQuantity((quantity) => quantity + 1)}
                className="bg-green-600 w-10 h-5 pb-9 text-center rounded-full aspect-square text-2xl"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setQuantity((quantity) => quantity - 1)}
                className="bg-red-600 w-10  h-5 pb-9 rounded-full aspect-square text-2xl"
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-end">
          <ButtonComponent
            type={"submit"}
            label="Add to Cart"
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
      <div className="flex flex-col items-center space-y-5">
        <div className="bg-[#E3E0E0] rounded-3xl flex flex-col items-center h-[60vh] w-[400px] py-5 space-y-5 ml-10 overflow-y-auto">
          <SalesItemComponent />
          <SalesItemComponent />
          <SalesItemComponent />
          <SalesItemComponent />
        </div>
        <button className="p-4 bg-black text-white w-[200px] rounded-2xl text-xl font-medium">
          Check - OUT
        </button>
      </div>
    </div>
  );
}
