import Image from "next/image";

type HealthCheckCardProps = {
  title: string;
  rate: string;
  icon: string;
  average: string;
};

export default function HealthCheckCard({
  icon,
  title,
  rate,
  average,
}: HealthCheckCardProps) {
  return (
    <div className="flex flex-col w-1/3 items-start gap-4 justify-start rounded-xl bg-background p-4">
      <div className="flex items-center justify-center rounded-full bg-white p-4 ">
        <Image src={icon} alt={title} width={100} height={100} />
      </div>
      <div>{title}</div>
      <div className="font-bold text-3xl">{rate}</div>
      <div className="text-sm flex items-center justify-center gap-2">
        {average.includes("Lower") && (
          <Image src="/ArrowDown.svg" alt="arrow" width={10} height={10} />
        )}
        {average.includes("Higher") && (
          <Image src="/ArrowUp.svg" alt="arrow" width={10} height={10} />
        )}
        {average}
      </div>
    </div>
  );
}
