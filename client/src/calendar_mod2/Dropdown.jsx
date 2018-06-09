import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import Calendar from './Calendar';
import arrow from '../images/arrow.png';
import { DropdownHolder, Close } from '../ModStylings';

export const Arrow = styled.div`
  border-radius: 10%;
  content: url(${arrow});
  height: 20px;
  border: 1px solid rgb(172, 172, 172);
  border-radius: 10%;
  padding: 3px;
  transform: ${props => (props.left ? 'rotate(0.5turn)' : '')};
    &:active{
      background-color: #79CCCD;
    }
    &:hover {
      cursor: pointer;
    }
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const SectionTwo = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionThree = styled.div`
  font-size: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export default function Dropdown(props) {
  let holderArrow;
  if (props.clicked === 1 || props.clicked === -1) {
    return (
      <div>
        {holderArrow}
        <DropdownHolder>
          <SectionOne>
            <Arrow left onClick={() => props.arrowClick(props.currDate, -1)} />
            <div> {props.month} {props.year} </div>
            <Arrow onClick={() => props.arrowClick(props.currDate, 1)} />
          </SectionOne>
          <SectionTwo>
            <Calendar {...props} />
          </SectionTwo>
          <SectionThree>
            <div> {props.minStay} day minimum. </div>
            <div> Updated 2 days ago </div>
          </SectionThree>
          <Close onClick={props.clearDates}> Clear Dates </Close>
        </DropdownHolder>
      </div>
    );
  }
  return null;
}

Dropdown.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.string),
  minStay: PropTypes.number,
  startDate: PropTypes.number,
  endDate: PropTypes.number,
  dateClick: PropTypes.func,
  clearDates: PropTypes.func,
  calendarChange: PropTypes.func,
  arrowClick: PropTypes.func,
  clicked: PropTypes.number,
  currDate: momentPropTypes.momentObj,
  month: PropTypes.string,
  year: PropTypes.number,
};

Dropdown.defaultProps = {
  dates: [],
  minStay: 0,
  startDate: null,
  endDate: null,
  dateClick: () => null,
  clearDates: () => null,
  calendarChange: () => null,
  arrowClick: () => null,
  clicked: 0,
  currDate: null,
  month: null,
  year: null,
};
