import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { Context } from '../index';
import { fetchBrands, fetchTypes,fetchDevices, fetchPageDevices } from '../http/deviceApi';
import Pagination from 'react-bootstrap/Pagination';
import { Spinner } from "react-bootstrap";
import { observer } from 'mobx-react-lite';

const Shop = observer(() => {
    const {device}=useContext(Context)
    let limit=5
    const[pages,setPages]=useState(0)
    const [selectedPage,setSelectedPage]=useState(1)
    let items = [];
    const[loading, setLoading]=useState(true)

    const getPages=(count,limit)=>{
        if(count%limit===0){
            return Math.round(count/limit)
        } else return Math.round(count/limit)+1
    }
    useEffect(()=>{
        fetchTypes().then(types=>{
            device.setTypes(types)
          })
        fetchBrands().then(brands=>{
            device.setBrands(brands)
          })
        fetchDevices().then(devices=>{
            device.setDevices(devices.rows)
            
            setPages(getPages(devices.count,limit))

            
          }).finally(()=>setLoading(false))
    },[])

        const fetchPage=(page)=>{
            setSelectedPage(page)
            fetchPageDevices(page).then(devices=>{
            device.setDevices(devices.rows)
            })
        }
            
    
        console.log(pages)
        for (let number = 1; number <= pages; number++) {
        items.push(
        <Pagination.Item 
            key={number} 
            active={number === selectedPage}
            onClick={()=>fetchPage(number)}>
        {number}
        </Pagination.Item>,
        );
        }
    

    if(loading){
        return <Spinner animation="grow"/>
      }

   
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9} >
                    <BrandBar/>
                    <DeviceList/>
                    <hr/>
                    <Pagination size="sm">{items}</Pagination>
                    
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;