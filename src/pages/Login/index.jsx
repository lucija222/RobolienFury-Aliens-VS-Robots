import { useState } from "react";
import replaceSpacesWithDashes from "../../util/helpers/replaceSpacesWithDashes";
import "./login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [characterDescription, setCharacterDescription] = useState(""); //have to use regex to replce spaces with -
    const [selectedCharacter, setSelectedCharacter] = useState("Robot");
    // const updatedCharacterDescription =
    //     replaceSpacesWithDashes(characterDescription); //send to regex
    const robotImageURL = `https://robohash.org/${finalCharacterDescription}`; //ADD if selcted robot -- else alien
    const alienImageURL = `https://robohash.org/${finalCharacterDescription}?set=set2`;

    const handleOnClick = (e) => {
        e.stopPropagation();
        setSelectedCharacter(e.target.value);
        console.log(selectedCharacter);
    };

    const updateUsername = (e) => {
        e.stopPropagation();
        setUsername(e.target.value);
    }

    const updateCharacterDescription = (e) => {
        e.stopPropagation();
        setCharacterDescription(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const finalCharacterDescription = replaceSpacesWithDashes(characterDescription);

        if (selectedCharacter === "Alien") {
            const characterURL = {}
        }
    };

    return (
        <div className="container">
            <h1>
                Robolien Fury: <br /> <span>Aliens VS Robots</span>
            </h1>
            <p>It's year 3027 and only robots remain on Earth, or so they thought before an alien invasion! Choose your side in the final battle of two warlords and determine Earth's fate! </p>

            <div className="button-container">
                <p>Alien or robot warlord?</p>
                <div onClick={handleOnClick}>
                    <button type="button" className="aline-button">
                        Alien
                    </button>
                    <button type="button" className="robot-button">
                        Robot
                    </button>
                </div>
            </div>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Warlord's name</label>
                <input
                    id="username"
                    type="text"
                    pattern="[^' ']+"
                    placeholder="Spaces not supported"
                    maxLength="15"
                    required
                    value={username}
                    onChange={updateUsername}
                />
                <br />
                <label htmlFor="characterDescription">
                    Generate character <span className="info">&#128712;</span>
                </label> {/*create a modal when info is hovered*/}
                <input
                    id="characterDescription"
                    type="text"
                    placeholder="Hover &#128712; for more info"
                    maxLength="30"
                    required
                    value={characterDescription}
                    onChange={updateCharacterDescription}
                />
                <br />
                <button type="submit" className="submit-button">Ready for battle!</button>
            </form>
        </div>
    );
};

export default Login;
