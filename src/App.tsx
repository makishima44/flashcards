import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button disabled={true}>Hello</Button>
      <Button as={Link} to={"https://google.com"}>
        Hello
      </Button>
    </div>
  );
}
