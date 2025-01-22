import axios from "axios";
import History from "./components/History";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";
import DiagnistList from "./components/DiagnistList";
import LabResults from "./components/LabResults";
import { dataType } from "./types";

export default async function Home() {
  const response = await axios.get(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("coalition:skills-test")}`,
      },
    }
  );

  const data = response.data;

  return (
    <div
      className="masonry-layout px-10 py-4 grid grid-cols-4 grid-rows-5  "
      style={{ columnCount: 4, columnGap: "1rem" }}
    >
      <div className="masonry-item bg-white p-4 rounded-xl mb-4  row-span-5">
        <PatientList data={data} />
      </div>
      <div className="masonry-item bg-white p-4 rounded-xl mb-4 col-span-2 h-auto row-span-4">
        <History
          data={
            data.filter(
              (patient: dataType) => patient.name === "Jessica Taylor"
            )[0]
          }
        />
      </div>
      <div className="masonry-item bg-white p-4 rounded-xl mb-4 h-auto row-span-3">
        <PatientProfile
          data={
            data.filter(
              (patient: dataType) => patient.name === "Jessica Taylor"
            )[0]
          }
        />
      </div>
      <div className="masonry-item bg-white p-4 rounded-xl mb-4 col-span-2 h-auto min-h[100px]">
        <DiagnistList
          data={
            data.filter(
              (patient: dataType) => patient.name === "Jessica Taylor"
            )[0].diagnostic_list
          }
        />
      </div>
      <div className="masonry-item bg-white p-4 rounded-xl mb-4 h-auto min-h[100px] row-3 col-2">
        <LabResults
          data={
            data.filter(
              (patient: dataType) => patient.name === "Jessica Taylor"
            )[0].lab_results
          }
        />
      </div>
    </div>
  );
}
