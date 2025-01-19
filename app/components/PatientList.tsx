import Image from "next/image";

type PatientListProps = {
  data: {
    age: number;
    gender: string;
    name: string;
    profile_picture: string;
  }[];
};

export default async function PatientList({ data }: PatientListProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="font-bold text-2xl">Patients</h1>
        <Image src="/searchIcon.svg" alt="search" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 p-4 h-[130vh] scroll-container">
        {data.map(
          (
            {
              age,
              gender,
              name,
              profile_picture,
            }: {
              age: number;
              gender: string;
              name: string;
              profile_picture: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 hover:bg-[#D8FCF7] rounded-full cursor-pointer "
            >
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={profile_picture}
                  alt={name}
                  width={50}
                  height={50}
                />
                <div>
                  <h2 className="font-bold text-lg">{name}</h2>
                  <p className="text-sm">
                    {gender}, {age}
                  </p>
                </div>
              </div>
              <Image
                src="/optionsHoriz.svg"
                alt="options"
                width={20}
                height={20}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
