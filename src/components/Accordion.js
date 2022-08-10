import {React, useState, Fragment} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const activeIndexHandler = i => {
        setActiveIndex(i);
        console.log(i);
    }

    const renderedItems = items.map(({title, content}, i) => {
        const active = i === activeIndex ? 'active' : '';
        return(
            <Fragment key={title}>
                <div className={`title ${active}`} onClick={() => {activeIndexHandler(i);}}>
                    <i className="dropdown icon"></i>
                    {title}
                </div>
                <div className={`content ${active}`}>
                    <p>
                        {content}
                    </p>
                </div>
            </Fragment>
        )
    })

    return(
        <div className='ui styled accordion'>
            {renderedItems}
        </div>
    );
};

export default Accordion;