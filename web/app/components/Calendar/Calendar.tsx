import { useState, useEffect, useContext } from "react";
import { getMonth } from "../../util/day";
import { CalendarHeader } from "./CalendarHeader";
import { Sidebar } from "./Sidebar";
import { Month } from "./Month";
import { EventModal } from "./EventModal";
import GlobalContext from "../../context/GlobalContext";



function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
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

export default Calendar;
