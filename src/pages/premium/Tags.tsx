import { useState } from "react";
import { PremiumTagInput } from "../../components/premium/PremiumTagInput";

export default function PremiumTagPage() {
  const [tags, setTags] = useState([]);

  return (
    <div className="p-6 text-yellow-200">
      <h1 className="text-3xl mb-4 font-bold">Premium Tags</h1>
      <PremiumTagInput tags={tags} setTags={setTags} />
    </div>
  );
}
