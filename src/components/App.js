//libraries
import {React, useState} from 'react';
//components
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: 'What is React JS?',
        content: 'React JS is a front-end framework for JavaScript'
    },
    {
        title: 'How does React JS work?',
        content: 'React JS uses JSX Components to render content onto the browser'
    },
    {
        title: 'Why use React JS?',
        content: 'React JS is a powerful and efficient frame-work for front-end apps'
    },
];

const options = [
    {
        label: 'LiiiGHT Orange',
        value: 'orange'
    },
    {
        label: 'LiiiGHT Red',
        value: 'red'
    },
    {
        label: 'LiiiGHT Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selection, setSelection] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                options={options}
                label='Select a color'
                selection={selection}
                onSelectionChange={setSelection}
                />
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    );
};

export default App;