import React from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

// components
import { head_1 } from '../shared/textStyle';

const HeaderMenu = () => {
  const history = useHistory();

  return (
    <Menus>
      <Link to ="survey" style={{textDecoration: 'none'}}>
        <MenuItem>
          이달의 OTT
        </MenuItem>
      </Link>
      <Link to ="mypage" style={{textDecoration: 'none'}}>
        <MenuItem>
          마이페이지
        </MenuItem>
      </Link>
      <Link to ="team" style={{textDecoration: 'none'}}>
      <MenuItem>
        팀소개
      </MenuItem>
      </Link>
    </Menus>
  );
};

// justify-content: flex-end;

// const Menu = styled.ul`
//   display: flex;
//   justify-content: flex-end;
//   position: fixed;
//   margin-top: 30px;
// `;

// const MenuItem = styled.li`
//   ${head_1}
//   text-align: center;
//   display: flex;
//   justify-content: space-between;
//   margin-left: 5rem;
//   cursor: pointer;
// `;

const Menus = styled.ul`
  ${head_1}
  color: white;
  display: flex;
  align-items: center;
  font-weight: normal;
`;

const MenuItem = styled.li`
  ${head_1}
  display: flex;
  color: #ffffff;
  /* text-align: center;
  justify-content: space-between;
  margin-left: 5rem; */
  margin-left: 30px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    color: var(--main);
  }
`;

// margin-left: 1rem;
// flex-grow: 0;

export default HeaderMenu;
