import {format} from 'date-fns';
import React from "react";
import Week from './Week';

const CalendarBody = () => {

    const weekDays = ['S', 'M', 'T','W', 'T', 'F', 'S'];

    return (
        <table>
            <thead>
                <tr>
                    {weekDays.map(d => <td></td>)}
                </tr>
            </thead>
            <tbody>
                <Week/>
            </tbody>
        </table>
    )
}

export default CalendarBody