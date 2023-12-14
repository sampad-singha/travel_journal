import './App.css'
import Navbar from "./components/Navbar.jsx";
import data from "./data.jsx"
import Card from "./components/Card.jsx";

function App() {
    const card_data = data.map((entry,index) =>{
        if(index !== data.length -1){
            return (
                <>
                    <Card key={entry.googleMapsUrl}{...entry} />
                    <hr className={"divider"}/>
                </>
            )
        }
        return(
                <Card key={entry.googleMapsUrl}{...entry} />
        )})


    return (
        <div className={"page"}>
            <Navbar />
            <div className={"main"}>
                {card_data}
            </div>
        </div>
    )
}

export default App

// {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
// }