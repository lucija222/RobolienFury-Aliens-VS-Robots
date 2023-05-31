import { useState } from "react";
import replaceSpacesWithDashes from "../../util/helpers/replaceSpacesWithDashes";
import "./login.scss";

const Login = () => {
    const [username, setUsername] = useState("");
    const [characterDescription, setCharacterDescription] = useState("");
    const [isAlienSelected, setIsAlienSelected] = useState(false);
    const [isRobotSelected, setIsRobotSelected] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState("");
    const [isInfoClicked, setIsInfoHovered] = useState(false);
    const [characterImageURL, setCharacterImageURL] = useState(``);

    const handleBtnOnClick = (e) => {
        e.stopPropagation();
        const targetInnerText = e.target.innerText;
        setSelectedCharacter(targetInnerText);

        if (targetInnerText === "Alien") {
            setIsAlienSelected(true);
            setSelectedCharacter("alien");
            if (isRobotSelected === true) {
                setIsRobotSelected(false);
            }
        } else if (targetInnerText === "Robot") {
            setIsRobotSelected(true);
            setSelectedCharacter("robot");
            if (isAlienSelected === true) {
                setIsAlienSelected(false);
            }
        }
    };

    const updateUsername = (e) => {
        e.stopPropagation();
        setUsername(e.target.value);
    };

    const handleInfoClick = (e) => {
        e.stopPropagation();
        setIsInfoHovered(true);
    };

    const updateCharacterDescription = (e) => {
        e.stopPropagation();
        setCharacterDescription(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const finalCharacterDescription =
            replaceSpacesWithDashes(characterDescription);

        if (selectedCharacter === "Alien") {
            setCharacterImageURL(
                `https://robohash.org/${finalCharacterDescription}?set=set2?size=200x200`
            );
        } else if (selectedCharacter === "Robot") {
            setCharacterImageURL(
                `https://robohash.org/${finalCharacterDescription}?size=200x200`
            );
        }
    };

    return (
        <div className="container">
            <h1>
                Robolien Fury: <br /> <span>Aliens VS Robots</span>
            </h1>
            <p>
                It's year 3027 and only robots remain on Earth, or so they
                thought before an alien invasion! Choose your side in the final
                battle of two warlords and determine Earth's fate!
            </p>

            <div className="button-container">
                <p>Alien or robot warlord?</p>
                <div
                    onClick={handleBtnOnClick}
                >
                    <button
                        type="button"
                        className={
                            isAlienSelected ? "btn-selected" : "btn-default"
                        }
                    >
                        Alien
                    </button>
                    <button
                        type="button"
                        className={
                            isRobotSelected ? "btn-selected" : "btn-default"
                        }
                    >
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
                    Generate character
                    <button
                        className="info"
                        onClick={handleInfoClick}
                    >
                        &#128712;
                    </button>
                </label>
                <p className={isInfoClicked ? "info-box" : "info-box"}>
                    Character images are generated based on text input using an
                    algorithm provided by the awesome Robohash service.
                    Specifying features as "blue eyes" won't make the
                    character have blue eyes, so have fun with random
                    descriptions and see what you create!
                </p>
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
                <button type="submit" className="submit-button">
                    Ready for battle!
                </button>
            </form>
        </div>
    );
};

export default Login;
