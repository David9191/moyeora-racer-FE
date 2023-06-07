import React, { useState } from 'react';
import ScheduleCategory from '../schedule/components/ScheduleCategory';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import Notification from '../schedule/components/Notification';
import CalendarModal from '../schedule/components/CalendarModal';
const SchedulePage = () => {
  //menu === 0? 공지사항
  //menu === 1? 일정표
  const [menu, setMenu] = useState(0);

  const handleClickMenu = (category) => {
    setMenu(category);
  };
  return (
    <Wrapper>
      <ScheduleCategory setMenu={handleClickMenu} />
      {menu === 0 ? <Notification /> : menu === 1 ? <CalendarModal /> : ''}
    </Wrapper>
  );
};

export default SchedulePage;
