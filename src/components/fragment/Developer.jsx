import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Kasun Weerasekara</h3>
                        <p>MERN Full Stack developer</p>
                        <p>SELF Leraner</p>
                        <p>Faculty of Information Technology-University of Moratuwa,Sri Lanka</p>
                        <p>EduLIFE Solution youtuber</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>An Information Technology Student at Lovely Professional University,University of Moratuwa.</p>
                    <p>Graduating in 2022 and looking for a responsible position to gain practical knowledge</p>
                    <p>A MERN full-stack web developer , Mobile App Developer and a Competitive coder.</p>
                    <p>BSc (Hons) in IT Undergraduate University of Moratuwa</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>And a blogger,UI Designer and YouTuber.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/kasun weerasekara"} title={"Kasun Weerasekara"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/@KasunWeeraseka8"} title={"@KasunWeeraseka8"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/kasun-weerasekara1997/"} title={"Kasun Weerasekara"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/weerasekara.k/"} title={"Kasun Weerasekara"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://kasunweerasekara.tech/"}  title={"Kasun Weerasekara"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;