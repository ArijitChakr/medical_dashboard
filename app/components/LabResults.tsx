import Image from "next/image";

export default function LabResults({ data }: { data: string[] }) {
  console.log(data);
  return (
    <div>
      <h1 className="font-bold text-2xl px-2">Lab Results</h1>
      <div className="scroll-container px-2 h-[450px]">
        {data.map((result, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-2 py-4 border-b border-gray-300"
          >
            <p>{result}</p>
            <Image
              src="/downLoadIcon.svg"
              alt="download"
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
