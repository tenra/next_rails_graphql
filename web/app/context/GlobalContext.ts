import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index: number) => {},
    daySelected: null,
    setDaySelected: (day: any) => {},
    showEventModal: false,
    setShowEventModal: () => {},
});

export default GlobalContext;
