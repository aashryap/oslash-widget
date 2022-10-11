import React, {useEffect, useState, useRef} from "react";

import "./dropdown.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const CloseIcon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
        </svg>
    );
};


const Dropdown = ({ 
    placeHolder, 
    options, 
    isMulti, 
    isSearchable, 
    groupingEnabled, 
    footerComponent,
    showCaretIcon = true,
    classes={
      dropdownContainer: ''
    },
    value,
    onChange=() => {},
    rightCtaProps = {
      visible: false,
      text: 'Click',
      onClick: () => {}
    } }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(isMulti ? (value || []) : (value || null));

    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef();

    useEffect(() => {
      setSelectedValue(isMulti ? (value || []) : (value || null));
    }, [value])

    useEffect(() => {
      const handleEnterOnSearch = (event) => {
        if (event.keyCode == 13) {
          if (searchRef?.current?.value?.length > 0 && getOptions(searchRef?.current?.value).length > 0) {
            // onItemClick(getOptions(searchRef?.current?.value)[0]);
            // setSearchValue("");
          }
          return true;
       }
      }
      document.addEventListener('keypress', handleEnterOnSearch)
      return () => {
        document.removeEventListener('keypress', handleEnterOnSearch)
      };
    }, [])

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);
  
    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };
    
    const grouping = (options) => {
      let group = {
        others: []
      };
      for (let i=0;i<options.length;i++) {
        if (options[i].group !== undefined) {
          group[options[i].group] = (group[options[i].group] ||  []).push(options[i]) ;
        } else {
          group['others'].push(options[i])
        }
      }
      return options;
    }

    const getOptions = (query=searchValue) => {
        if (!query) {
            return options;
        }
        return options.filter((option) => option.label.toLowerCase().indexOf(query.toLowerCase()) >= 0);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return isSearchable ? (
              <div className="search-box">
                  <input className={`${showMenu ? 'search-box-input-active' : ''}`} onChange={onSearch} placeholder={placeHolder} value={searchValue} ref={searchRef} />
              </div>) : 
              <div>
               {placeHolder}
              </div>
        }
        if (isMulti) {
        return (
            <>
              <div className="dropdown-search">
                    {selectedValue.map((option) => (
                        <div key={option.value} className="dropdown-tag-item">
                            {option.label}
                            <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close"><CloseIcon /></span>
                        </div>
                    ))}
                {/* </div> */}
                {isSearchable && (
                  <div className="search-box">
                      <input  className={`${showMenu ? 'search-box-input-active' : ''}`} onChange={onSearch} placeholder={placeHolder} value={searchValue} ref={searchRef} />
                  </div>)
                }
              </div>
            </> 
        );
    }
    return <div>{selectedValue.label}</div>;
  };

  const onItemClick = (option) => {
    let newValue;
    if (isMulti) {
        if ((selectedValue || []).findIndex((o) => o.value === option.value) >= 0) {
            newValue = removeOption(option);
        } else {
            newValue = [...selectedValue, option];
        }
    } else {
        newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  }

  const isSelected = (option) => {
    if (isMulti) {
        return (selectedValue || []).filter((o) => o.value === option.value).length > 0;
    }
    if(!selectedValue) {
        return false;
    }
    return selectedValue.value === option.value;
  }

    const removeOption = (option) => {
        return (selectedValue || []).filter((o) => o.value !== option.value);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        setSelectedValue(removeOption(option));
    };
  
  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener('click', handler);
    return () => {
        window.addEventListener('click', handler);
    }
  }, [])

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  }

  const renderOptionComponent = (option) => {
    if (option.renderer) {
      return <option.renderer option={option} isSelected={isSelected(option)} onItemClick={onItemClick} />
    }
    return <div 
              key={option.value} 
              onClick={() => onItemClick(option)} 
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
            {
              option.label
            }
            </div>; 
  }
  
  return (
    <div className={`${classes?.dropdownContainer} dropdown-container`}>
      {
        showMenu ?
        <div className="dropdown-search-bar search-bar-active">
          <div onClick={handleInputClick} className="dropdown-input">
            <div className="dropdown-selected-value">{getDisplay()}</div>
            {showCaretIcon ? <Icon /> : null}
          </div>
          {
            rightCtaProps?.visible && 
            <div className="dropdown-right-active">
              <div className="dropdown-cta" onClick={rightCtaProps?.onClick}>
                <span>{rightCtaProps?.text}</span>
              </div>
            </div>
          }
      </div> :
        <div className="dropdown-search-bar">
          <div onClick={handleInputClick} className={`dropdown-input ${rightCtaProps.visible ? 'w-80' : ''}`}>
            <div className="dropdown-selected-value">{getDisplay()}</div>
            {showCaretIcon ? <Icon /> : null}
          </div>
          {
            rightCtaProps?.visible && 
            <div className="dropdown-right">
              <div onClick={rightCtaProps?.onClick}>
                {
                  rightCtaProps?.text
                }
              </div>
            </div>
          }
        </div>
      }
      
      {
        showMenu && <div className="dropdown-menu">
        {
            getOptions().map((option) => {
                return renderOptionComponent(option);    
            })
        }
        {
          footerComponent && 
          <div className="dropdown-footer">
            {
              footerComponent
            }
          </div>
        }
          
        </div>
      }
      
    </div>
  );
};

export default Dropdown;