import React from 'react'
import "./Content.css"

import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import { Button } from '@material-ui/core';


function Content() {
    return (
        <div className="content" id="home">
            <div className="bodycontent">


                <div className="innercont">

                    <h1>Zodongo Peter <span>Founder of TakaTaka Plastics</span></h1>
                    <p>Lorem ipsum text that is meant to occupy space for nothering that tazt eadfjaljd sfajlfj adklsf jaljl  asdfajslkj the mo sotusioft  sothsa smeowths. Lets udanda ocet o toome tho wmalsjd kfjasoafht psod halsdj jfahdf  shfslf jalks hwoth oh ssldfjas dfhdsl </p>


                    <div className="socialmedia">
                        <Github className="icon" />
                        <Twitter className="icon" />
                        <Instagram className="icon" />
                        <Facebook className="icon" />
                    </div>


                </div>


            </div>
            <div className="container">

                <div id="aboutme">
                    <div className="aboutme">
                        <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                        <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>

                    </div>
                </div>




                <div className="section" id="project" >

                    <h1>Projects Completed</h1>
                    <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                    <div className="currentproject">




                        <div className="card">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                            <Button className="button">Read More</Button>

                        </div>

                        <div className="card">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                            <Button className="button">Read More</Button>

                        </div>
                        <div className="card">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                            <Button className="button">Read More</Button>

                        </div>

                    </div>

                </div>
            </div>
            <div className="imagediver">


                <h1>Reach Me Now!   <span>zodongopeter@gmail.com</span> </h1>

            </div>

            <div className="container" >
                <div className="section" id="currentproject">

                    <h1>Current Projects</h1>

                    <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>

                    <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>

                    <div className="currentproject">

                        <div className="card">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                            <Button className="button">Read More</Button>

                        </div>
                        <div className="card">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>

                            <Button className="button">Read More</Button>

                        </div>

                        <div className="card">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                            <Button className="button">Read More</Button>

                        </div>
                    </div>

                </div>
                <div className="section" id="contact" >

                    <h1>Contact Me</h1>

                    <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>

                    <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>

                    <div className="contactgroup">

                        <div className="contactsocial">
                            <Github className="contacticon" />
                            <Twitter className="contacticon" />
                            <Instagram className="contacticon" />
                            <Facebook className="contacticon" />
                        </div>

                        <div className="card contactcard">

                            <h5>TakaTaka Title</h5>

                            <p>Lorem is the most import design text feature that is uded for making sure that the text outline isn layied or porper installationa dna makerjksdjfaksdflj. ther is ire si more to the text thought that no nwl h waydfan tha dsfha</p>
                            <Button className="button">Read More</Button>

                        </div>
                    </div>

                </div>
            </div>

            <div className="imagediver imagediverlast">


                <h1>Let's Build a Project Together!  <span>zodongopeter@gmail.com</span> </h1>

            </div>

        </div>

    )
}

export default Content
