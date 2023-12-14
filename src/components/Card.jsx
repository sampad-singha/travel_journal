import location_icon from "../assets/map-point.png"
const Card = (props) => {
    return (
        <div className={"card"}>
            <img className={"card--image"} src={props.imageUrl} alt={props.location + " image"}/>
            <div className={"card--overlay"}>
                <div className={"card--head"}>
                    <img className={"card--icon"} src={location_icon} alt="location icon"/>
                    <h5 className={"card--location"}>{props.location}</h5>
                    <a className={"card--link"} href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on
                        Google Maps</a>
                </div>
                <h1 className={"card--title"}>{props.title}</h1>
                <h3 className={"card--date"}>{props.startDate} - {props.endDate}</h3>
                <p className={"card--description"}>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;

// {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
// }