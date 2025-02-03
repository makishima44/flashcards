import { Button } from "./components/ui/button";
import arr from "./assets/icons/log-out.svg";

export function App() {
  return (
    <div>
      <Button>
        <img src={arr} /> Button Primary
      </Button>
    </div>
  );
}
