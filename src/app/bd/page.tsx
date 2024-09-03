"use client";

import { NextPage } from "next";
import { data } from "../lib/data";
import { ChangeEvent, useState } from "react";

interface Props {}

const Page: NextPage<Props> = () => {
  // Extract unique values for each category
  const uniqueDivisions = [...new Set(data.map((item) => item.division))];
  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedUpazila, setSelectedUpazila] = useState<string>("");

  // Filter data based on selected values
  const filteredDivisions = data.filter(
    (item) => item.division === selectedDivision
  );
  const uniqueDistricts = [
    ...new Set(filteredDivisions.map((item) => item.district)),
  ];
  const upazilas = filteredDivisions.filter(
    (item) => item.district === selectedDistrict
  );

  // Handle changes for select boxes
  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, reset: () => void) =>
    (e: ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
      reset();
    };

  return (
    <div>
      <select
        value={selectedDivision}
        onChange={handleChange(setSelectedDivision, () => {
          setSelectedDistrict("");
          setSelectedUpazila("");
        })}
      >
        <option value="">--Select a division--</option>
        {uniqueDivisions.map((division) => (
          <option key={division} value={division}>
            {division}
          </option>
        ))}
      </select>

      {selectedDivision && (
        <select
          value={selectedDistrict}
          onChange={handleChange(setSelectedDistrict, () =>
            setSelectedUpazila("")
          )}
        >
          <option value="">--Select a district--</option>
          {uniqueDistricts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      )}

      {selectedDistrict && (
        <select
          value={selectedUpazila}
          onChange={handleChange(setSelectedUpazila, () => {})}
        >
          <option value="">--Select an upazila--</option>
          {upazilas.map((item) => (
            <option key={item.upazila} value={item.upazila}>
              {item.upazila}
            </option>
          ))}
        </select>
      )}

      <br />
      <br />
      <div>   
        Selected Division: {selectedDivision}
        <br />
        Selected District: {selectedDistrict}
        <br />
        Selected Upazila: {selectedUpazila}
      </div>
    </div>
  );
};

export default Page;
