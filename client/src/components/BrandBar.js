import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import { Context } from '../index';

const BrandBar = observer(() => {
    const {device}=useContext(Context)
    return ( 
       <Row className='d-flex'>
            {device.brands.map(brand=>
                <Card 
                    style={{cursor:'pointer'}}
                    className='p-3'
                    key={brand.id}
                    border={brand.id===device.selectedBrand.id?'danger':'light'}
                    onClick={()=>device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </Card>)}
       </Row>
    );
});

export default BrandBar;