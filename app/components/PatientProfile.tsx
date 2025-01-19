import Image from "next/image";

export default function PatientProfile({
  data,
}: {
  data: {
    name: string;
    age: number;
    gender: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
  };
}) {
  const details = [
    { spec: data.age, title: "Age", icon: "/BirthIcon.svg" },
    { spec: data.gender, title: "Gender", icon: "/FemaleIcon.svg" },
    {
      spec: data.phone_number,
      title: "Contact Info",
      icon: "/PhoneIcon.svg",
    },
    {
      spec: data.emergency_contact,
      title: "Emergency Contact",
      icon: "/PhoneIcon.svg",
    },
    {
      spec: data.insurance_type,
      title: "Insurance",
      icon: "/InsuranceIcon.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Image
        src="/Layer 2.png"
        alt="profile"
        width={150}
        height={150}
        className="mx-auto mt-10"
      />
      <h1 className="text-center font-bold text-xl">{data.name}</h1>
      <div className="flex flex-col  items-start gap-4 px-4 py-2">
        {details.map(({ title, icon, spec }, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <Image src={icon} alt={title} width={40} height={40} />
            <div className="flex flex-col items-start justify-start ">
              <h2 className="font-bold text-lg">{title}</h2>
              <div className="text-sm">{spec}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 mx-auto px-4 py-4 rounded-full bg-button text-lg font-bold ">
        Show All Information
      </div>
    </div>
  );
}
