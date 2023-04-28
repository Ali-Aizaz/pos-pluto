import Image from "next/image";

export default function Manage({ cols, rows, action, warranty }) {
  return (
    <table className="flex flex-col whitespace-nowrap text-2xl">
      <tr className="flex w-min border-b-4 border-gray/20 p-4 font-medium text-gray">
        {cols?.map(({ name }) => {
          <th className="w-[200px]  text-start">{name}</th>;
        })}
      </tr>
      <tr className="flex p-4">
        {rows?.map(({ name }) => {
          <td className="w-[200px]">{name}</td>;
        })}
        {action && (
          <td className="flex w-[200px] space-x-6">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </td>
        )}
        {warranty && <td className="flex w-[200px] space-x-6"></td>}
      </tr>
    </table>
  );
}
