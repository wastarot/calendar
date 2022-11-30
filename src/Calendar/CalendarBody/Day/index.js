import { format } from "date-fns";
import React from "react";


const Day = (props) => {
    return <td>
        {format(props.day, 'd')}
    </td>
}


export default Day