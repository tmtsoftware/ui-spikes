import {Calendar, Col, Radio, Row, Select, Typography, DatePicker, Divider} from 'antd';
import type {CalendarMode} from 'antd/lib/calendar/generateCalendar';
import React from 'react';

function onPanelChange(value: any, mode: CalendarMode) {
  console.log(value, mode);
}

export const CustomCalendar = () => {
  return (
    <>
      <DatePicker />
      <Divider/>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        className={'calender'}
      />
    </>
  );
};

