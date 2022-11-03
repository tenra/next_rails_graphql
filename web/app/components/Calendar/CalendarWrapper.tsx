import { useState } from "react";
import { getMonth } from "../../util/day";
import { CalendarHeader } from "./CalendarHeader";
import { Sidebar } from "./Sidebar";
import { Month } from "./Month";



function CalendarWrapper() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
      <div className="h-screen flex flex-col w-full">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default CalendarWrapper;
