import { useState, useEffect } from "preact/hooks";
import "./panelContainer.css";
import { PanelButton, buttonTypes } from "./panelButton";
import { PanelModal } from "./PanelModal";
import { Exercises } from "../Exercises/Exercises";

type plans = { title: string; username: string }[];

const PanelContainer = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [plans, setPlans] = useState<plans>([]);
  const [list, setList] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("User");
  const [planTitle, setPlanTitle] = useState<string>();

  const handleCreatePlan = async (form: FormData) => {
    await fetch("http://localhost/trainingTracker/server/src/sendPlan.php", {
      method: "post",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg) {
          handleGetPlans();
        } else {
          alert("Error while creating a plan");
        }
      });
  };

  const handleGetPlans = async () => {
    const formData = new FormData();
    formData.append("username", localStorage.getItem("username") as string);
    await fetch("http://localhost/trainingTracker/server/src/getPlan.php", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const array: plans = [];
        (data.msg as plans).forEach((item) => {
          array.push(item);
        });
        setPlans(array);
      });
  };

  useEffect(() => {
    handleGetPlans();
  }, [list]);

  return (
    <>
      {list === false && (
        <main className="PanelContainer d-flex justify-content-evenly align-items-center">
          <PanelModal
            sendToApi={handleCreatePlan}
            modal={modal}
            hideModal={() => setModal(false)}
          />
          {plans.map((item) => (
            <PanelButton
              show={() => {
                setList(true);
                setPlanTitle(item.title);
                setUsername(item.username);
              }}
              type={buttonTypes.SHOW}
            >
              {item.title}
            </PanelButton>
          ))}
          <PanelButton
            show={() => {
              setModal(true);
            }}
            type={buttonTypes.ADD}
          />
        </main>
      )}
      {
        list === true &&
        <Exercises title={planTitle as string} username={username} hideList={() => setList(false)} />
      }
    </>
  );
};

export { PanelContainer };
