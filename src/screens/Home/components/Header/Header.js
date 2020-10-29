import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import './Header.css';

export function Header() {
    return (
        <div>
            <div className="bg">
                <div
                    className="div-test">
                    <div className="header-body">
                        {/* <img src={fotoLuciano} alt="" /> */}
                        <div className="borde-corge">
                            <CodeIcon className="box-relock"></CodeIcon>
                            <h2 className="text-shadow-white" style={{textAlign:"center"}}>
                                ¡Hello! I am a Software Developer
                            </h2>
                            <p style={{textAlign:"center"}}>
                                In this page, you can read about me, my projects and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
