import React, {useState} from 'react';
import './todolist.css';
import events from '../jsons/events.json';
import {Button, List} from 'antd';

export const TodoList = () => {

  return (
    <List
      className="todo-list"
      bordered
      size="small"
      dataSource={events}
      renderItem={(item) => (
        <List.Item>
          {item.value}
          <Button danger type="text" className=""> X </Button>
        </List.Item>
      )}
    />
  );
};
