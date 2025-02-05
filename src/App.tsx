import { Input } from "./components/ui/input";

export function App() {
  return (
    <div>
      <Input placeholder="input" label="input" error={true} />
      <Input placeholder="input" label="input" disabled={true} />
    </div>
  );
}
