type Props = {
  value: number;
  max: number;
};

export function Progress({ value, max }: Props) {
  const progress = (value * 100) / max;

  return (
    <div className="relative rounded-full bg-violet-100 h-2 overflow-hidden">
      <div
        className="absolute bg-violet-700 h-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
