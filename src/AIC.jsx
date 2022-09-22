import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import RFA from 'RFA/RFA';
import RFI from 'RFI/RFI';

function AIC() {
  return (
    <>
      <Card
        className='w-100'
        color="danger"
        outline
      >
        <CardHeader>Additional Information Capability</CardHeader>
        <CardBody>
          <RFI />
          <RFA />
        </CardBody>
      </Card>
    </>
  );
}
export default AIC;
