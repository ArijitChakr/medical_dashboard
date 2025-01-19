export default function DiagnistList({
  data,
}: {
  data: { name: string; description: string; status: string }[];
}) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-bold text-2xl">Diagnist List</h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-6 py-4 rounded-full bg-background">
          <p className="w-1/4 text-left">Problem / Diagnosis</p>
          <p className="w-2/4 text-center">Description</p>
          <p className="w-1/4 text-right">status</p>
        </div>
        <div className="scroll-container h-[100px]">
          {data.map(({ name, description, status }, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-2 text-sm "
            >
              <p className="w-1/4 text-left">{name}</p>
              <p className="w-2/4 text-center">{description}</p>
              <p className="w-1/4 text-right">{status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
