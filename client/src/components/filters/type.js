import React, { useState, useEffect, useRef } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { motion } from 'framer-motion';
import { spring } from 'popmotion';
import { useFocused, useOnClickOutside } from '../customHooks/index';

import { tagData } from "../../containers/ProfileCreation/ProfileCreation1/data"

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.fullWhite};
    color: ${(props) => props.theme.colors.gray};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:104px;
    height:39px;
    border:0px;
    cursor: pointer;

    :hover{
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    }

    ${({ clicked }) =>
        clicked &&
        css`
            background-color: ${(props) => props.theme.colors.red};
            color: ${(props) => props.theme.colors.fullWhite};
        `
    }
`;

const Word = styled.div`
// font-family is necessary here
    font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
    font-style: normal;
    font-weight:600;
    font-size:18px;
    line-height:21px;
    text-align:center;
    word-spacing:20px;

`;

const TextAdd = 'Type +';
const TextRemove = 'Type x';

const Type = ({
    items,
    theme,
    setData,
  }) => {

    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState([]);
    const [titleHovered, setTitleHovered] = useState(false);
    const [curIndex, setCurIndex] = useState(-1);
    const dropdown = useRef(null);
    const dropdownContainer = useRef(null);
    const dropdownFocused = useFocused(dropdown);
    useOnClickOutside(dropdownContainer, () => {
      setClicked(false);
    });
  
    useEffect(() => {
      document.addEventListener('keypress', onKeypress);
      document.addEventListener('keydown', onKeydown);
      return () => {
        document.removeEventListener('keypress', onKeypress);
        document.removeEventListener('keydown', onKeydown);
      };
      // eslint-disable-next-line
    }, [curIndex, titleHovered, clicked, dropdownFocused]);
  
    const onKeypress = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        if (dropdownFocused) {
          setClicked(!clicked);
        }
        if (clicked) {
          setClicked(false);
        } else if (titleHovered) {
          setClicked(!clicked);
        }
      }
    };
  
    const onKeydown = (e) => {
      // Down arrowkey or tab is pressed
      if (e.keyCode === 40 || e.keyCode === 9) {
        if (curIndex + 1 < items.length) setCurIndex(curIndex + 1);
        else setCurIndex(0);
        // Up arrowkey is pressed
      } else if (e.keyCode === 38) {
        if (curIndex - 1 > -1) setCurIndex(curIndex - 1);
        else setCurIndex(items.length - 1);
      }
    };

    const optionHandleClick = (item) => {
      var newSelected
      if (!selected.includes(item)) {
          newSelected = [...selected, item]
      } else {
          newSelected = selected.filter((element) => {
            return element != item 
          })
      }

      // console.log("selected: ", newSelected)
      setData(newSelected)
      setSelected(newSelected)
    };

    items= tagData
  
    const options = items.map( (item, index) => {
      return (
        <Option
          key={`option-${index + 1}`}
          animate = {
              selected.includes(item)
              ? {backgroundColor: theme.colors.lightGray}
              : {backgroundColor: theme.colors.fullWhite }
          }
          
          whileTap={{ backgroundColor: theme.colors.lightGray }}
          onHoverStart={() => {
            setCurIndex(index);
          }}
          onHoverEnd={() => {
            setCurIndex(-1);
          }}
          noBorder={index === items.length - 1}
          onClick={() => {
            optionHandleClick(item);
          }}
        >
          {item}
        </Option>
      );
    });
  
    return (
      <DropdownContainer ref={dropdownContainer}>
        
        
        <Button clicked={clicked} onClick={() => setClicked(!clicked)}>
            <Word>{clicked ? TextAdd : TextRemove}</Word>
        </Button>


        <div style={{ position: 'relative' }}>
          <OptionsContainer
            initial={{ height: 0 }}
            animate={
              clicked
                ? {
                    height: 'auto',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                    transition: {},
                  }
                : {
                    height: 0,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: { type: spring },
                  }
            }
          >
            {options}
          </OptionsContainer>
        </div>
      </DropdownContainer>
    );
  };
  
  const DropdownContainer = styled.div`
    width: 7.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 1.6875rem;
    
  `;
  
  const OptionsContainer = styled(motion.ul)`
    box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.25);
    display: flex;
    width: 7.4rem;
    flex-direction: column;
    border-radius: 0.8125rem;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    margin: 0 0 0.8rem 0;
    position: absolute;
    left: -3.78rem;
    z-index: 2;
    background: ${(props) => props.theme.colors.fullWhite};
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.checkboxGray};

    max-height: 300px;
    overflow-y: scroll;
  `;
  
  const Option = styled(motion.li)`
    height: auto;
    background-color: ${(props) => props.theme.colors.fullWhite};
    padding: 0.5rem 0.5rem;
    border-bottom-width: ${(props) => (props.noBorder ? '0px' : '1px')};
    border-bottom-style: solid;
    border-bottom-color: ${(props) =>
      props.noBorder ? 'none' : props.theme.colors.lightGray};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    overflow-wrap: break-word;
    user-select: none;
    cursor: pointer;
    padding: 10;
  `;
  
  export default withTheme(Type);