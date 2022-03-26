import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import faqImage from '../../Images/faq.jpg'
import'./Faq.css'


const Faq = () => {
    return (
        <div className='container p-5'>
            <h2 className='text-center pt-3 pb-3 faq-title'><span>F</span>requently <span>A</span>sked <span>Q</span>uestion</h2>
            <div className="row row-cols-md-2 align-items-center">
                <div>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How does reactJS work?</Accordion.Header>
                        <Accordion.Body>
                        The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How state works in ReactJS?</Accordion.Header>
                        <Accordion.Body>
                            
                            The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.

                        </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Difference between Props and State?</Accordion.Header>
                        <Accordion.Body>
                            <strong>Props</strong>
                            <ul>
                                <li>Props are read-only.</li>
                                <li>Props are immutable.</li>
                                <li>Props allow you to pass data from one component to other components as an argument.</li>
                                <li>Props can be accessed by the child component.</li>
                            </ul>

                            <strong>State</strong>
                            <ul>
                                <li>State changes can be asynchronous.</li>
                                <li>State holds information about the components.</li>
                                <li>State cannot be accessed by child components.</li>
                                <li>The State is internal and controlled by the React Component itself.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    </Accordion>
                </div>
                <div>
                    <img src={faqImage} className='img-fluid' alt="" />
                </div>
            </div> 
        </div>
    );
};

export default Faq;