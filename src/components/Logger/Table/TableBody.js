import React from "react";

export const TableBody = ({ filteredData }) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {filteredData.map((item, index) => (
        <tr key={index}>
          <td className="whitespace-nowrap py-4 md:pl-8 text-sm ">
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                {item?.logId || "-"}
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap py-4 md:pl-8 text-sm ">
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                {item?.applicationType || "-"}
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap py-4 md:pl-8 text-sm ">
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                {item?.applicationId || "-"}
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap py-4 md:pl-8 text-sm ">
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                {item?.actionType || "-"}
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap py-4 md:pl-8 text-sm ">
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                {item?.actionDetail || "-"}
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap py-4 md:pl-8 text-sm ">
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                {item?.creationTimestamp || "-"}
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
