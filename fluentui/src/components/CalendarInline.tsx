import * as React from 'react';
import {Calendar,} from 'office-ui-fabric-react/lib/Calendar';

export interface ICalendarInlineProps {
}

const dayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today'
};

export const CalendarInline: React.FunctionComponent<ICalendarInlineProps> = () => {

    return (
        <div>
            <Calendar strings={dayPickerStrings}/>
        </div>
    );
};
