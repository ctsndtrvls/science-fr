import React from "react";

    function Tags (props) {
        return (<div class="container-tags">
            <a 
                className="waves-effect waves-light btn cyan lighten-1"
                onClick={() => props.changeTag('biology')}   
            >
                <i class="material-icons left">image</i>biology
            </a>
            <a 
                className="waves-effect waves-light btn cyan lighten-1"
                onClick={() => props.changeTag('chemistry')}   
            >
                <i class="material-icons right">cloud</i>chemistry</a>
            <a 
                className="waves-effect waves-light btn cyan lighten-1"
                onClick={() => props.changeTag('physics')}   
            >
                <i class="material-icons right">iso</i>physics</a>   
            <a 
                className="waves-effect waves-light btn cyan lighten-1"
                onClick={() => props.changeTag('history')}   
            >
            <i class="material-icons right">tag_faces</i>history</a>             
            <a 
                className="waves-effect waves-light btn cyan lighten-1"
                onClick={() => props.changeTag('geography')}   
                >
            <i class="material-icons right">filter_hdr</i>geography</a>         
                </div>);
    }

export default Tags;