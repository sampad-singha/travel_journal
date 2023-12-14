import globe from "../assets/globe.png"
const Navbar = () => {
    return (
        <div className={"nav"}>
            <img className={"nav--logo"} src={globe} alt="globe logo"/>
            <h4 className={"nav--title"}>my travel journal.</h4>
        </div>
    );
};

export default Navbar;