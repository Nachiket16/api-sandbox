import React, {useEffect} from "react";
import { List, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
const Menus = () =>{
    return( 
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
            {"Home"}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/webhooks" action>
            {"Webhooks"}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/upstreams" action>
            {"Upstreams"}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/services" action>
            {"Services"}
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-consumers" action>
            {"Consumers"}
            </Link>
        </ListGroup>
    )
}

export default Menus