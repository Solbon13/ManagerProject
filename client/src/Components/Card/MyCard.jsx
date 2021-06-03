import { Card, Modal, Form, Input, DatePicker, Button, Select } from "antd";
import {
  EditOutlined} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import moment from "moment";
import { createTask, updateTask } from "../../actions/taskAction";
import { Option } from "antd/lib/mentions";

const { Meta } = Card;

const MyCard = ({ listId, taskList, dragStartHandler }) => {
  const dispatch = useDispatch();

  //! а если задача не привязана к листу? хотя как его внесешь?
  const tasksUser = useSelector((state) =>
    state.tasksUser.tasksUser?.filter(
      (item) => item.task?.taskListId === listId
    )
  );

  const users = useSelector((state) => state.user.users);

  const childrenExecutor = users?.map((item) => (
    <Option
      key={item.id}
    >{`${item.firstName} ${item.lastName} ${item.patronymic}`}</Option>
  ));

  const childrenTaskList = taskList?.map((item) => (
    <Option key={item.id}>{item.name}</Option>
  ));

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdd, setAdd] = useState(false);

  const [form] = Form.useForm();

  const showModal = (isAdd, id) => {
    setAdd(isAdd);
    console.log(isAdd ? "" : tasksUser.filter((item) => item.id === id)[0]);
    const currentTaskUser = tasksUser.filter((item) => item.id === id)[0];
    form.setFieldsValue({
      id: isAdd ? "" : currentTaskUser.id,
      userId: isAdd ? "" : currentTaskUser.userId,
      taskId: isAdd ? "" : currentTaskUser.taskId,
      name: isAdd ? "" : currentTaskUser.task.name,
      progressTask: isAdd ? "" : currentTaskUser.task.progressTask,
      dateEnd: isAdd ? "" : moment(currentTaskUser.task.dateEnd, "DD.MM.YYYY"),
      executor: isAdd
        ? ""
        : currentTaskUser.user?.firstName +
          " " +
          currentTaskUser.user?.lastName +
          " " +
          currentTaskUser.user?.patronymic,
      taskList: isAdd
        ? ""
        : taskList.filter(
            (item) => currentTaskUser.task.taskListId === item.id
          )[0].name
    });
    setIsModalVisible(true);
  };

  const onSubmit = (values) => {
    //* УДАЛИТЬ ПОТОМ
    console.log(form.getFieldValue());
    console.log(values.executor);
    console.log(users);
    console.log(users.filter((item) => item.id == values.executor));

    if (isAdd) {
      dispatch(
        createTask({
          name: form.getFieldValue().name,
          taskListId: form.getFieldValue().taskList || 1,
          progressTask: form.getFieldValue().progressTask,
          dateEnd: form.getFieldValue().dateEnd.format("DD.MM.YYYY"),
          taskId: form.getFieldValue().taskId,
          // TODO executor - string, id - integer
          // ! нужно подумать на счет того, что новому пользаку дали задание
          userId: users.filter((item) => item.id == values.executor)[0]?.id
        })
      );
    } else {
      dispatch(
        updateTask({
          id: form.getFieldValue().id,
          name: form.getFieldValue().name,
          taskListId: form.getFieldValue().taskList || 1,
          progressTask: form.getFieldValue().progressTask,
          dateEnd: form.getFieldValue().dateEnd.format("DD.MM.YYYY"),
          taskId: form.getFieldValue().taskId,
          // TODO executor - string, id - integer
          // ! нужно подумать на счет того, что новому пользаку дали задание
          userId: users.filter((item) => item.id == values.executor)[0]?.id
        })
      );
    }
    setIsModalVisible(false);
  };

  const closePopup = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    // if ()
    e.target.style.boxShadow = "0 4px 3px grey";
  };

  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  // const dragStartHandler = (e, taskList, item) => {
  //   setCurrentList(taskList)
  //   setCurrentCard(item)
  //   console.log(item)
  // };

  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  const dropHandler = (e, taskList, item) => {
    e.preventDefault();
    console.log(taskList);
  };

  return (
    <>
      {tasksUser.map((item) => (
        <Card
          actions={[
            // <SettingOutlined key="setting" />,
            <EditOutlined
              key="edit"
              onClick={() => showModal(false, item.id)}
            />
            // <EllipsisOutlined key="ellipsis" />
          ]}
          key={item.id}
          hoverable
          style={{ margin: "5px" }}
          draggable={true}
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e, taskList, item)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHandler(e, taskList, item)}
        >
          <Meta title={item.task.name} description={item.task.dateEnd} />
        </Card>
      ))}

      <Button type="dashed" block onClick={() => showModal(true)}>
        Добавить
      </Button>

      <Modal
        title={isAdd ? "Добавить задачу" : "Изменение"}
        visible={isModalVisible}
        onOk={form.submit}
        onCancel={closePopup}
      >
        <Form form={form} onFinish={onSubmit}>
          <Form.Item
            name="taskList"
            label="Тип задания"
            hasFeedback
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select
              showSearch
              placeholder="Please select a country"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {childrenTaskList}
            </Select>
          </Form.Item>
          <Form.Item
            label="Задание"
            name="name"
            rules={[{ required: true, message: "Необходимо ввести задание" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Дата исполнения"
            name="dateEnd"
            rules={[{ required: true, message: "Введите дату исполнения" }]}
          >
            <DatePicker placeholder="Дата" format={"DD.MM.YYYY"} />
          </Form.Item>
          <Form.Item
            name="executor"
            label="Исполнитель"
            hasFeedback
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select
              showSearch
              placeholder="Please select a country"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {childrenExecutor}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MyCard;
