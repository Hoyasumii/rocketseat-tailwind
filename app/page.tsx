"use client";

import { Input, Tabs, Select, Label } from "@/components";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <Tabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="font-medium text-zinc-900 text-lg">Personal info</h2>
            <p className="font-sm text-zinc-500">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 active:bg-zinc-100"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-4 py-2 text-sm font-semibold bg-violet-600 text-white shadow-sm hover:bg-violet-700 active:bg-violet-800"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <hr className="border-zinc-200 mt-5 mb-6" />

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <Label htmlFor="fistName" title="Name" />
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Alan" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Reis" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label htmlFor="email" title="Email address" />
          <Input.Root>
            <Input.Preffix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Preffix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="alanreisanjo@gmail.com"
            />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label
            title="Your photo"
            description="This will be displayed on yout profile."
          />
          <Input.File.Root className="flex items-start gap-5">
            <Input.File.Preview />
            <Input.File.Trigger />
            <Input.File.Control />
          </Input.File.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label title="Role" htmlFor="role" />
          <Input.Root>
            <Input.Control id="role" defaultValue="Software Developer" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label htmlFor="country" title="Country" />
          <Select.Root name="country" placeholder="Select a country...">
            <Select.Item value="br" text="Brazil" />
            <Select.Item value="us" text="United States" />
          </Select.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label htmlFor="timezone" title="Timezone" />
          <Select.Root name="timezone" placeholder="Select a timezone...">
            <Select.Item
              value="utc8"
              text="Pacific Standard Time (UTC-08:00)"
            />
            <Select.Item value="utc3" text="America São Paulo (UTC-03:00)" />
          </Select.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label
            htmlFor="bio"
            title="Bio"
            description="Write a short introduction."
          />
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select.Root placeholder="" defaultValue="normal">
                <Select.Item value="normal" defaultChecked text="Normal Text" />
                <Select.Item value="md" text="Markdown" />
              </Select.Root>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </button>
              </div>
            </div>

            <Input.Textarea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <Label
            htmlFor="projects"
            title="Portfolio projects"
            description="Share a few snippets of your work."
          />
          <Input.File.Root>
            <Input.File.Trigger />
            <Input.File.Control multiple />
            <Input.File.FileList />
          </Input.File.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
