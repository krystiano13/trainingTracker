import type { FunctionComponent } from "preact";

interface ExercisesProps {
    title: string,
    username: string
}

const Exercises:FunctionComponent<ExercisesProps> = ({ title, username }) => {
    return (
        <main className="PanelContainer">

        </main>
    )
}

export { Exercises };