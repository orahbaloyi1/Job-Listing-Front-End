import React from "react";

const PracticeMore = () => {
  return (
    <div className="mt-10">
      <table className="mx-auto flex-col w-1/2 text-left">
        <thead className="">
          <tr className="">
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Description
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:border-gray py-5">
            <td className="py-5 px-3">{}</td>
            <td className="py-5 px-3">{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PracticeMore;
