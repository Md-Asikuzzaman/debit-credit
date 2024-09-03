import React from "react";

const AddTransaction = () => {
  return (
    <div className="max-w-[750px] mx-auto">
      <form>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Add Transaction
        </h2>
        <div className="flex flex-col gap-3 pt-5 pb-4">
          <input
            type="text"
            placeholder="Transaction Title"
            className="input input-bordered w-full bg-transparent text-white border-gray-500 focus:border-gray-400"
          />

          <input
            type="number"
            placeholder="Transaction Amount"
            className="input input-bordered w-full bg-transparent text-white border-gray-500 focus:border-gray-400"
          />

          <select className="input input-bordered w-full bg-[#13141F] text-white border-gray-500 focus:border-gray-400">
            <option hidden value="">
              Select Status
            </option>
            <option value="incomming">Incomming</option>
            <option value="outgoing">Outgoing</option>
          </select>

          <textarea
            placeholder="Description (Optional)"
            className="input input-bordered w-full bg-[#13141F] text-white border-gray-500 focus:border-gray-400"
          ></textarea>
        </div>
        <button className="btn btn-primary">Add New</button>
      </form>
    </div>
  );
};

export default AddTransaction;
