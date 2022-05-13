import React from 'react';
import { Panel, Text, Button, H1, H2, Flex, H4, Box, Link, H3,} from '@bigcommerce/big-design';
import styles from "./style.module.css";
import styled from 'styled-components';
import { Image } from 'image-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarBorderIcon } from '@bigcommerce/big-design-icons';

class Dashboard extends React.Component {
    render() {
        
        const StyledBox = styled(Box)`
            min-width: 10rem;
        `;

        return (
            <div className={styles.dashboard}>
                <div className={styles.dashboard_header}>
                    <div className={styles.top_img}>
                        <a href="">
                            <img src="https://printcart-com.s3.amazonaws.com/2020/01/logo.png" alt="Jaded Pixel" className={styles.dashboard_img} />
                        </a>
                    </div>
                    <div className={styles.top_text}>
                        <div className={styles.top_text_list}>
                            <ul>
                                <li>
                                    <Link href="" className={styles.top_link}>Manage Product</Link>
                                </li>
                                <li>
                                    <Link href="" className={styles.top_link}>Manage Order</Link>
                                </li>
                                <li>
                                    <Link href="" className={styles.top_link}>Installation Instruction</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.top_user}>
                            <span>
                                <svg className={styles.top_icons} viewBox="0 0 40 40">
                                    <path fill="currentColor" d="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z"></path>  
                                </svg>
                            </span>
                            <p style={{marginBottom: '0px'}}>OutsourcingVN</p>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboard_content}>
                    <div className={styles.top_heading}>
                        <h1>Hey! Nice to see you here at the first time</h1>
                        <H3>Build Your Business With PrintCart Online Design Tools 👋 😊 </H3>
                        <p>Below is step by step Tutorial to help you understand and set up Workflow.🚀</p>
                        <p style={{marginBottom: '40px'}}>You can skip this and go to set up product!</p>
                    </div>
                    <div className={styles.dashboard_step}>
                        <div style={{textAlign: 'right', marginBottom: '30px'}}>
                            <Button>Skip tutorial</Button>
                        </div>
                        <div className="row mb-5">
                            <div className="col-4">
                                <H4>
                                    <span className={styles.badge}>Step 1:</span>
                                    <span className={styles.title_large}>Choose product design</span>
                                </H4>
                                <div className={styles.title_des}>
                                    Choose from your list to pick products you want to add customization.
                                    <p></p>
                                    <Text> 
                                        <span> 1.  From </span> <span style={{color: 'black', fontWeight: 'bold'}}>Dashboard</span><span style={{color: 'var(--p-text-subdued, #637381)'}}>, go to</span><br />
                                        <Link className={styles.Polaris_Link}> Dashboard &gt; Manage Products.</Link>
                                    </Text>
                                    <p>
                                        <span>2.</span> Click <span style={{color: 'black', fontWeight: 'bold'}}>Add products</span> and choose your product you want setting design. 
                                    </p>
                                    <p>
                                        <span>3.</span> Click <span style={{color: 'black', fontWeight: 'bold'}}>Add </span>
                                    </p>
                                    <p>
                                        <span>4.</span> Click <span style={{color: 'black', fontWeight: 'bold'}}>Edit</span> product you want setting design.
                                    </p>
                                </div>
                            </div>
                            <div className="col-8">
                                <Panel>
                                    <img src="https://printcart-com.s3.amazonaws.com/2020/02/ezgif.com-video-to-gif.gif" alt="Step1" />
                                </Panel>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboard_step}>
                        <div className="row mt-3 mb-5">
                            <div className="col-4">
                                <H4>
                                    <span className={styles.badge}>Step 2:</span>
                                    <span className={styles.title_large}>Design Setting</span>
                                </H4>
                                <div className={styles.title_des}>
                                    Use our settings to config product size, design area, add sides and more.
                                    <p></p>
                                    <p><span>1.</span> Config design area upload images, add side products, product custom.</p>
                                    <p>
                                        <span>2.</span> Click <span style={{color: 'black', fontWeight: 'bold'}}>Save</span>
                                    </p>
                                    <p>
                                        <span>3.</span>  See your config in store click <span style={{color: 'black', fontWeight: 'bold'}}>View in store </span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-8">
                                <Panel>
                                    <img src="https://printcart-com.s3.amazonaws.com/2020/02/ezgif.com-video-to-gif+(1).gif" alt="Step2" />
                                </Panel>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboard_step}>
                        <div className="row mt-3 mb-5">
                            <div className="col-4">
                                <H4>
                                    <span className={styles.badge}>Step 3:</span>
                                    <span className={styles.title_large}>Review And Public.</span>
                                </H4>
                                <div className={styles.title_des}>
                                    You can check your setting in store with config.
                                </div>
                            </div>
                            <div className="col-8">
                                <Panel>
                                    <img src="https://printcart-com.s3.amazonaws.com/2020/02/step4.gif" alt="Step3" />
                                </Panel>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboard_step}>
                        <div className="row mt-3 mb-5">
                            <div className="col-4">
                                <H4>
                                    <span className={styles.badge}>Step 4:</span>
                                    <span className={styles.title_large}>Let Customer Enjoy It.</span>
                                </H4>
                                <div className={styles.title_des}>
                                    Customer can create design and checkout with product have design.
                                </div>
                            </div>
                            <div className="col-8">
                                <Panel>
                                    <img src="https://printcart-com.s3.amazonaws.com/2020/02/step5.gif" alt="Step4" />
                                </Panel>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashboard_step}>
                        <div className="row mt-3 mb-5">
                            <div className="col-4">
                                <H4>
                                    <span className={styles.badge}>Step 5:</span>
                                    <span className={styles.title_large}>Download Customer Design</span>
                                </H4>
                                <div className={styles.title_des}>
                                    Store owner can download customer design.
                                    <p></p>
                                    <Text> 
                                        <span> 1.  From </span> <span style={{color: 'black', fontWeight: 'bold'}}>Dashboard</span><span style={{color: 'var(--p-text-subdued, #637381)'}}>, go to</span><br />
                                        <Link className={styles.Polaris_Link}> Dashboard &gt; Manage Order.</Link>
                                    </Text>
                                </div>
                            </div>
                            <div className="col-8">
                                <Panel>
                                    <img src="https://printcart-com.s3.amazonaws.com/2020/03/order.png" alt="Step5" style={{width: '100%', height: '90%'}}/>
                                </Panel>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5" style={{textAlign: 'right'}}>
                        <Button>Finish</Button>
                    </div>
                </div>
                <div className={styles.dashboard_footer} style={{padding: "0px 20rem", textAlign: 'center'}}>
                    <div style={{padding: '0 22rem'}}>
                        <div className={styles.dashboard_footer_text}>
                            <StarBorderIcon></StarBorderIcon> 
                            <Text>Learn more about <Link href=""> Printcart</Link></Text>
                        </div>
                        <div className="mb-4">
                            <img className="mb-2" src="https://cdn.shopify.com/s/files/applications/b45952267e2b244898f3da9e718c6ca3_200x200.png?1578643861" alt="P" style={{width: '25%', height: '25%'}} />
                            <Text>Made with ❤️ from NetbaseTeam</Text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;