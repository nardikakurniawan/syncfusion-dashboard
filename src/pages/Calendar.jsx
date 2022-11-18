import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  WorkWeek,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useStateContext } from "../contexts/ContextProvider";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-40 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Calendar" />

      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
