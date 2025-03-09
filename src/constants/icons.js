import {UilPlaneDeparture, UilTicket, UilUtensils, UilBedDouble} from '@iconscout/react-unicons'
import { ReactComponent as LiBeach } from "../assets/icons/li_beach.svg";

export const iconMappings = {
    "fas fa-plane": <UilPlaneDeparture className="hover-icon" />,
    "fas fa-ticket-alt": <UilTicket className="hover-icon" />,
    "fas fa-utensils": <UilUtensils className="hover-icon" />,
    "fas fa-bed": <UilBedDouble className="hover-icon" />,
    "fas fa-umbrella-beach": (
      <LiBeach className="hover-svg" sx={{ transition: "stroke 0.3s ease" }} />
    ),
}


