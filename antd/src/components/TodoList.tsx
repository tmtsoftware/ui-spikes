import React, {useState} from 'react';
import './todolist.css';
import data from '../jsons/events.json';
import {Button} from 'antd';

export const TodoList = () => {
  const [liveData, setLiveData] = useState<
    { country: string; date: number; value: number }[]
  >(data);

  return (
    // <List
    //   className="todo-list"
    //   bordered
    //   size="small"
    //   dataSource={events}
    //   renderItem={(item) => (
    //     <List.Item>
    //       {item.eventName}
    //       <Button danger type="text" className=""> X </Button>
    //     </List.Item>
    //   )}
    // />
    <>
      {/* <Table bordered columns={columns} dataSource={events} />*/}
      <div id="container"></div>
      <div>
        <Button onClick={() => setLiveData([...liveData, {country: '北美', date: 1980, value: 1500}])}> add value</Button>
      </div>
    </>
  );
};
