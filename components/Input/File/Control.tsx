"use client";

import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

export type ControlProps = ComponentProps<"input">;

export function Control({ multiple, ...props }: ControlProps) {
  const { id, onFilesSelected, files: hookFiles } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    const files = Array.from(event.target.files);

    if (multiple) {
      onFilesSelected(files.concat(hookFiles));
      return;
    }
    onFilesSelected(files);
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
}
