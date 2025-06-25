import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Select } from "react-day-picker";

export default function Home() {
  return (
    <div >
      <Button variant="primary">Prime</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">sadfMuted</Button>
      <Button variant="teritrary" >Teritrary</Button>
      <Input />
      <Select />
    </div >

  );
}
