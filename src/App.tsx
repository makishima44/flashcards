import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";

export function App() {
  return (
    <div>
      <Input placeholder="input" variant={"search"} />
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quaerat cum odit quasi
        optio, molestiae doloremque, ducimus sunt fugiat dolorum obcaecati nesciunt vel culpa
        laborum rem quis eius aspernatur adipisci.
      </Card>
    </div>
  );
}
