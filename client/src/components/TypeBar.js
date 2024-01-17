import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
    const {device}=useContext(Context)//Получаем объект device с помощью реструктуризации из глобального контекста
    return (
    <ListGroup>
        {device.types.map(type=>
            <ListGroup.Item 
            style={{cursor:'pointer'}}
            key={type.id}
            active={type.id===device.selectedType.id}
            onClick={()=>device.setSelectedType(type)}>
                {type.name}
            </ListGroup.Item>
        )}
    </ListGroup>
    );
});

export default TypeBar;