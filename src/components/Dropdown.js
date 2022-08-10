import {React, useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selection, onSelectionChange, dropdownLabel}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = e => {
            if(ref.current.contains(e.target)) {
                return;
            };
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click',  onBodyClick, {capture: true});
        };
    }, []);

    const renderedOptions = options.map(option => {
        const {label, value} = option;

        if(value === selection.value) {
            return null;
        }

        return (
            <div 
            key={value} 
            className="item"
            onClick={() => onSelectionChange(option)}
            >
                {label}
            </div>
        );
    });

    const {label} = selection;

    console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{dropdownLabel}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                    <i className="dropdown icon"></i>
                    <div className="text">{label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;