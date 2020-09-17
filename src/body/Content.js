import React from 'react'
import "./Content.css"

import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import { Button } from '@material-ui/core';

import avatarimaage from "./avatar.jpg"


function Content() {
    return (
        <div className="content" id="home">
            <div className="bodycontent">


                <div className="innercont">

                    <h1>Peter Rock Okwoko<span>Zodongo</span><span className="qual">MSc ICTE (AAU-CPH), PPM (GU), BICT (GU)</span></h1>
                    <p>Founder and Team Lead at AfriGreen Sustain and Co-Founder and COO at Takataka Plastics</p>
                    <p className="blackbg">
                        Studied Innovative Communication Technologies and Entreprenuership at Aalborg Universitet København - AAU CPH</p>
                    <div className="socialmedia">
                        <Github className="icon" />
                        <Twitter className="icon" />
                        <Instagram className="icon" />
                        <Facebook className="icon" />
                    </div>


                </div>

                <div className="stackedcardheader">
                    <section class="card-list">
                        <article class="cardb">
                            <header class="card-header">
                                <p>#1</p>
                                <h2>AfriGreen Sustain</h2>
                                <p>AfriGreen Sustain promotes environmental sustainability through inclusive waste management practices</p>
                            </header>
                            <div class="card-author">
                                <a href="#" class="author-avatar">
                                    <img src={avatarimaage} alt="profile" />
                                </a>

                                <div class="author-name">
                                    <div class="author-name-prefix">Founders</div>
                                    Peter Rock Okwoko, Paige Balcom
                                </div>
                            </div>
                        </article>
                       <article class="cardb">
                            <header class="card-header">
                                <p>#2</p>
                                <h2>Takataka Plastics</h2>
                                <p>Transforming plastic waste into household and construction items, and creating a source of income.</p>
                            </header>
                            <div class="card-author">
                                <a href="#" class="author-avatar">
                                    <img src={avatarimaage} alt="profile" />
                                </a>
                                
                                <div class="author-name">
                                    <div class="author-name-prefix">Founders</div>
                                    Peter Rock Okwoko, Paige Balcom
                                    
                                </div>
                            </div>

                        </article>
                    </section>
                </div>

                </div>
                <div className="container">

                    <div id="aboutme">
                        <div className="aboutme">
                            <p>Peter Rock Okwoko, a former Computer Science lecturer at Gulu University and Paige Balcom, a PhD student in  Mechanical engineering at UC Berkeley and a Fullbright scholar came together and started Takataka Plastics, a recycling company that seeks to transform plastic waste into household and construction items, while providing a source of income for the communities they buy the plastic waste from. </p>
                            <p>Takataka is locally transforming plastic waste in Uganda into quality, affordable construction materials. We’re creating jobs, improving the environment and public health, and closing a loop in the circular economy. Takataka (meaning “waste” in Swahili) is providing a recycling service that currently does not exist, creating income opportunities for the marginalized, and reducing environmental and health hazards in places where waste is currently burned or littered.</p><p> We are developing ground-breaking technology to safely process plastic waste in Uganda, changing people’s mindsets about plastic waste from untouchable, dirty “rubbish” to a potential resource impacting their environment, and creating opportunities for healing for trauma survivors.</p>

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

                                <h5>AfriGreen Sustain</h5>

                                <p>AfriGreen Sustain promotes environmental sustainability through inclusive waste management practices . A greener environment is what we yearn for.</p>
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
                </div>
                
                <div className="container">
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
