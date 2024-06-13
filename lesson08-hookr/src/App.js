import React, { useState } from 'react';

import thuListStudent from './component/ThuListStudent'
import thuAddOrEdit from './component/ThuAddOrEdit'

function App() {
  // Mock data
  const thu_listTasks = [
      { thuId: 106, thuName: "Lê Thương Hoài Thu", thuAge: 25, thuIsActive: true },
      { thuId: 1, thuName: "Đỗ Khánh Linh", thuAge: 22, thuIsActive: true },
      { thuId: 2, thuName: "Nguyễn văn Quyến", thuAge: 23, thuIsActive: false },
      { thuId: 3, thuName: "Phạm Minh Hiền", thuAge: 24, thuIsActive: true },
      { thuId: 4, thuName: "Nguyễn Thành Công", thuAge: 26, thuIsActive: false },
  ]

  const [thulistStudents, setthuListStudents] = useState(thu_listTasks);
  const [thuEditingTask, setthuEditingTask] = useState(null);

  const thuHandleSubmit = (thuTask) => {
      if (thuEditingTask !== null) {
          setthuListStudents(prev => prev.map((task, index) => index === thuEditingTask.index ? thuTask : task));
          setthuEditingTask(null);
      } else {
          setthuListStudents(prev => [...prev, thuTask]);
      }
  }

  const thuHandleEditTask = (index) => {
      setthuEditingTask({ ...thulistStudents[index], index });
  }

  const thuHandleRemoveTask = (index) => {
      setthuListStudents(prev => prev.filter((_, i) => i !== index));
  }

  return (
      <div className="container border">
          <h1>Lê Thương Hoài Thu</h1>
          <hr />
          <div>
              {/*danh sach list tasks*/}
              <thuListStudent renderthuListStudents={thulistStudents} onEditTask={thuHandleEditTask} onRemoveTask={thuHandleRemoveTask} />
          </div>
          <div>
              <thuAddOrEdit thuOnSubmit={thuHandleSubmit} thuEditingTask={thuEditingTask} />
          </div>
      </div>
  );
}

export default App;