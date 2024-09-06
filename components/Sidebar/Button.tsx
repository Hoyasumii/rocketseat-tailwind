type Props = {
  level: 1 | 2;
  title: string;
};

export function Button({ level, title }: Props) {
  return (
    <button
      type="button"
      className={
        level === 1
          ? `text-sm font-medium text-violet-500 hover:text-violet-600`
          : `text-sm font-medium text-violet-600 hover:text-violet-700`
      }
    >
      {title}
    </button>
  );
}
