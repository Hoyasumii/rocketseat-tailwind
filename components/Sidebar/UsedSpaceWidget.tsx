import { Progress } from "../Progress";
import { Button } from "./Button";

export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <p className="text-sm/5 font-medium text-violet-700">Used space</p>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of yout available space. Need more?
        </p>
        <Progress value={70} max={100} />
        <div className="space-x-3">
          <Button title="Dismiss" level={1} />
          <Button title="Upgrade plan" level={2} />
        </div>
      </div>
    </div>
  );
}
