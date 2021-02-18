import Block from '../Block';
import {Container, Row, Col} from 'react-bootstrap';
import idGenerator from '../../../src/helpers/idGenerator'


const Grid=()=>{
console.log('result id',idGenerator());
    const blocksJSXArray=[];
    for(let k=0; k<20; k++){
        blocksJSXArray.push(
            <Col key={idGenerator()} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mt-3">
                <Block />
            </Col>
        );
    };

    return(
        <div>
            
            <Container>
                <Row className="justify-content-center mt-5">
                    <h1>Grid Component</h1>
                    {/* <span>Span</span> */}
                </Row>
                <Row className="justify-content-center mt-5">
                    {blocksJSXArray}
                </Row>
            </Container>
        </div>
    )
}

export default Grid;