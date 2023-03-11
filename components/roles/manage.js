import Image from "next/image";

export default function Manage({ cols, rows, action, warranty }) {
  return (
    <table className="flex flex-col text-2xl whitespace-nowrap">
      <tr className="flex text-gray font-medium border-b-4 border-gray/20 w-min p-4">
        {cols?.map(({ name }) => {
          <th className="w-[200px]  text-start">{name}</th>;
        })}
      </tr>
      <tr className="flex p-4">
        {rows?.map(({ name }) => {
          <td className="w-[200px]">{name}</td>;
        })}
        {action && (
          <td className="w-[200px] flex space-x-6">
            <button>
              <Image src={"/Edit.png"} alt={"edit"} width={25} height={20} />
            </button>
            <button>
              <Image src={"/trash.png"} alt={"edit"} width={20} height={20} />
            </button>
          </td>
        )}
        {warranty && <td className="w-[200px] flex space-x-6"></td>}
      </tr>
    </table>
  );
}
