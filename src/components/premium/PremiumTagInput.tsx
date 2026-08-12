import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from "react";

export const PremiumTagInput = ({ tags, setTags }:any) => {
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (!newTag) return;
    setTags([...tags, newTag]);
    setNewTag("");
  };

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <Input value={newTag} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNewTag(e.target.value)} placeholder="Add new tag..." />
        <Button onClick={addTag}>Add</Button>
      </div>

      <ul className="list-disc ml-6">
        {tags.map((t: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};
