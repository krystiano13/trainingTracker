import type { FunctionComponent } from "preact";
import type { dataType } from "./Exercises";
import "./Item.css";

interface ItemProps {
  id: number;
  plan: string | undefined;
  username: string | undefined;
  title: string;
  sets: number;
  repetitions: number;
  weight: number;
  volume: number;
  progress: number;
  openModal: (data: dataType) => void;
}

const ExerciseItem: FunctionComponent<ItemProps> = (props: ItemProps) => {
  return (
    <li
      onClick={() => {
        props.openModal({
          id: props.id,
          name: props.title,
          username: props.username,
          plan: props.plan,
          sets: props.sets,
          repetitions: props.repetitions,
          weight: props.weight,
          volume: props.volume,
          progress: props.progress,
        });
      }}
      className="ExeciseItem"
    >
      <div className="Items">
        {Object.entries(props).map(([key, value], i) => {
          if(key !== 'username' && key !== 'id' && key !== 'plan')
            return <div>{value}</div>;
        })}
      </div>
    </li>
  );
};

export { ExerciseItem };
