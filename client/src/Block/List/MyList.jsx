import { List } from "antd";
import { Collapse } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../../actions/taskAction";
import MyCard from "../../Components/Card/MyCard";

const { Panel } = Collapse;

const MyList = () => {
  const dispatch = useDispatch();

  const taskList = useSelector((state) => state.main.taskList);

  function callback(key) {
    // console.log(key);
  }

  const [currentCard, setCurrentCard] = useState(null);

  const dropHandler = (e, item) => {
    dispatch(
      updateTask({
        name: currentCard.task.name,
        progressTask: currentCard.task.progressTask,
        dateEnd: currentCard.task.dateEnd,
        taskListId: item.id,
        userId: currentCard.userId,
        taskId: currentCard.task.id,
        id: currentCard.id
      })
    );
  };

  const dragStartHandler = (e, taskList, item) => {
    setCurrentCard(item);
    console.log(item);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    // console.log(e)
    // e.target.style.boxShadow = "0 4px 3px grey";
  };

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={taskList}
      renderItem={(item) => (
        <div
          draggable={true}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, item)}
        >
          <Collapse defaultActiveKey={["1"]} onChange={callback}>
            <Panel header={item.name} key={item.id}>
              <MyCard
                listId={item.id}
                taskList={taskList}
                // currentCard={currentCard}
                dragStartHandler={dragStartHandler}
              />
            </Panel>
          </Collapse>
        </div>
      )}
    />
  );
};

export default MyList;
