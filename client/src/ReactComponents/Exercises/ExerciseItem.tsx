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
    <button className="ExeciseItem">
      <div className="Items">
        {Object.entries(props).map(([key, value], i) => (
          <span>{value}</span>
        ))}
      </div>
    </button>
  );
};

export { ExerciseItem };
