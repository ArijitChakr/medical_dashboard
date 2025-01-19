import BloodPressureChart from "./LineChart";
import HealthCheckCard from "./HealthCheckCard";

type HistoryProps = {
  data: {
    diagnosis_history: {
      blood_pressure: {
        systolic: {
          value: number;
          levels: string;
        };
        diastolic: {
          value: number;
          levels: string;
        };
      };
      respiratory_rate: {
        value: number;
        levels: string;
      };
      heart_rate: {
        value: number;
        levels: string;
      };
      temperature: {
        value: number;
        levels: string;
      };

      month: string;
      year: string;
    }[];
  };
};

export default async function History({ data }: HistoryProps) {
  return (
    <div className="my-2 mx-2 rounded-xl bg-white p-2">
      <h1 className="text-2xl font-bold pl-4 pb-6">Diagnosis History</h1>
      <BloodPressureChart data={data.diagnosis_history} />
      <div className="flex justify-between gap-4 px-4">
        <HealthCheckCard
          icon="/respiratoryRate.svg"
          title="Respiratory Rate"
          rate={`${data.diagnosis_history[0].respiratory_rate.value} bpm`}
          average={`${data.diagnosis_history[0].respiratory_rate.levels}`}
        />
        <HealthCheckCard
          icon="/respiratoryRate.svg"
          title="Respiratory Rate"
          rate={`${data.diagnosis_history[0].heart_rate.value} bpm`}
          average={`${data.diagnosis_history[0].heart_rate.levels}`}
        />
        <HealthCheckCard
          icon="/respiratoryRate.svg"
          title="Respiratory Rate"
          rate={`${data.diagnosis_history[0].temperature.value} °F`}
          average={`${data.diagnosis_history[0].temperature.levels}`}
        />
      </div>
    </div>
  );
}
