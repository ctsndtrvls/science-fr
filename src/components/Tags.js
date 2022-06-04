import React from "react";

    function Tags (props) {
        return (<div class="container-tags">
            <a 
                class="waves-effect waves-light btn cyan lighten-1"
                onClick={() => props.changeTag('biology')}
            >
                <i class="material-icons left">image</i>biology
            </a>
            <a class="waves-effect waves-light btn cyan lighten-1"><i class="material-icons right">cloud</i>chemistry</a>
            <a class="waves-effect waves-light btn cyan lighten-1"><i class="material-icons right">iso</i>physics</a>   
            <a class="waves-effect waves-light btn cyan lighten-1"><i class="material-icons right">tag_faces</i>history</a>             
            <a class="waves-effect waves-light btn cyan lighten-1"><i class="material-icons right">plus_one</i>maths</a>         
                </div>);
    }

export default Tags;