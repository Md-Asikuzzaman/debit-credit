import React from "react";

import { LuBeer, LuClipboardEdit } from "react-icons/lu";

const ListsOfTransaction = () => {
  return (
    <div>
      <div className="flex items-center gap-3 px-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm py-2"
          />
          <p className="text-white text-sm">Select all items</p>
        </label>

        <div className="flex items-center">
          <div className="h-7 w-7 hover:bg-[#4A00FF] grid place-content-center rounded-full cursor-pointer">
            <LuClipboardEdit className="text-white" size={18} />
          </div>
          <div className="h-7 w-7 hover:bg-[#4A00FF] grid place-content-center rounded-full cursor-pointer">
            <LuBeer className="text-white" size={18} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {/* row 1 */}
            <tr>
              <td className="flex items-center gap-3">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                </label>
                1
              </td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            {/* row 1 */}
            <tr>
              <td className="flex items-center gap-3">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                </label>
                1
              </td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            {/* row 1 */}
            <tr>
              <td className="flex items-center gap-3">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                </label>
                1
              </td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            {/* row 1 */}
            <tr>
              <td className="flex items-center gap-3">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                </label>
                1
              </td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="join mt-12">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-primary">2</button>
        <button className="join-item btn">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div>
    </div>
  );
};

export default ListsOfTransaction;
