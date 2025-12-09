import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const PremiumTagInput = ({ tags, setTags }) => {
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (!newTag) return;
    setTags([...tags, newTag]);
    setNewTag("");
  };

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <Input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="Add new tag..." />
        <Button onClick={addTag}>Add</Button>
      </div>

      <ul className="list-disc ml-6">
        {tags.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};
