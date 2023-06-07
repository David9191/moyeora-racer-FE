import styled from 'styled-components';
import { ModalButton } from './modalComponents';

// 테이블 요소들
export const tableRowSetting = `
display: grid;
grid-template-columns: 14.5rem 14.5rem 14.5rem 14.5rem 14.5rem;
grid-template-rows: 4rem;
justify-items: center;
align-items: center;

& > span {
	font-size: 1.4rem;
}`;
export const TableRowInfo = styled.div`
  ${tableRowSetting}
  border-bottom: 1px solid #000;

  font-weight: 'bold';
`;
export const UserInfo = styled.li`
  ${tableRowSetting}
  border-bottom: 1px solid #d6c9ff;

  &:nth-child(even) {
    background-color: #faf7ff;
  }
`;
export const TableTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;
export const DetailBtn = styled.button`
  padding: 0.7rem 1rem 0.6rem 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;

  background-color: #fcfcfe;

  font-weight: 500;
`;

// 페이지네이션
export const PageNationBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 6rem;
  margin-bottom: 10rem;
`;
export const PageNationBlockDiv = styled.div`
  width: 3rem;
  height: 3rem;
  padding-left: 0.1rem;

  border: 1px solid gray;
  border-radius: 0.4rem;

  font-size: 1.4rem;
  text-align: center;
  line-height: 3rem;

  cursor: pointer;

  &.now-page {
    border: none;

    background-color: #7353ea;
  }
  &.now-page > p {
    color: #ffffff;
  }
`;
export const MainContentHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;
export const EnrollButton = styled(ModalButton)`
  padding: 0.7rem 1.5rem;
`;
