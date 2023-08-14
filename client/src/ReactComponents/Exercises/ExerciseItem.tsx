import type { FunctionComponent } from "preact";
import "./Item.css";

interface ItemProps {
  title: string;
  sets: number;
  reps: number;
  weight: number;
  volume: number;
  progress: number;
}

const ExerciseItem: FunctionComponent<ItemProps> = (props: ItemProps) => {
  return (
    <li className="ExeciseItem">
      <div className="Items">
        {Object.entries(props).map(([key, value], i) => (
          <div>{value}</div>
        ))}
      </div>
    </li>
  );
};

export { ExerciseItem };
