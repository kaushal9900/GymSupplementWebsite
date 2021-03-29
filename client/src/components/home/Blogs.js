import React from 'react'
import {Card} from 'antd'
import {Button} from 'react-bootstrap'
const {Meta} = Card;
const Blogs = () => {
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1616815522/ON-Homepage-Features-x3-DURING-TRAINING-new_myucle.jpg"
             style={{ maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         actions= {[
             <Button variant="dark" className="cbutton"  active>Learn More</Button> 
         ]}>
         <Meta title="DURING TRAINING" description="Keep going with our series of caffeinated and non-caffeinated Amino Acid products to
 help you train and sustain." />        
         </Card>
         </div>
         <div className="col-md-4">
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1616815522/ON-Homepage-Features-x3-DURING-TRAINING-new_myucle.jpg"
             style={{ maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         actions= {[
             <Button variant="dark" className="cbutton"  active>Learn More</Button> 
         ]}>
         <Meta title="DURING TRAINING" description="Keep going with our series of caffeinated and non-caffeinated Amino Acid products to
 help you train and sustain." />        
         </Card>
         </div>
         <div className="col-md-4">
        
         <Card
         cover={
             <img alt="Loading Failed" src="https://res.cloudinary.com/gymproject/image/upload/v1616815522/ON-Homepage-Features-x3-DURING-TRAINING-new_myucle.jpg"
             style={{ maxwidth:"300px",maxheight: "300px", objectFit: "cover" }}
             className="p-1"/>
         }
         actions= {[
             <Button variant="dark" className="cbutton"  active>Learn More</Button> 
         ]}>
         <Meta title="DURING TRAINING" description="Keep going with our series of caffeinated and non-caffeinated Amino Acid products to
 help you train and sustain." />        
         </Card>
         </div>      
        </div>
      </div>
    )
}

export default Blogs;