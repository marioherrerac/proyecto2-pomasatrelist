document.addEventListener("DOMContentLoaded", function () {
           var calendarEl = document.getElementById("calendar");
           var calendar = new FullCalendar.Calendar(calendarEl, {
             themeSystem: "bootstrap",
             initialView: "resourceTimeGridDay",
             dayMinWidth: 200,
             height: "auto",
             resources: [
               { id: "a", title: "Room A" },
               { id: "b", title: "Room B" },
               { id: "c", title: "Room C" },
               { id: "d", title: "Room D" },
               { id: "e", title: "Room E" },
               { id: "f", title: "Room F" }
             ]
           });
           calendar.render();
         });
         