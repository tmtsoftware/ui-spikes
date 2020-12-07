import { Calendar, Col, Radio, Row, Select, Typography } from 'antd';
import type { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import React from 'react';
import './Calendar.css'

function onPanelChange(value: any, mode: CalendarMode) {
  console.log(value, mode);
}

export const CalendarT = () => {
  return (
    <div>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        className="Calendar"
      />
    </div>
  );
};

