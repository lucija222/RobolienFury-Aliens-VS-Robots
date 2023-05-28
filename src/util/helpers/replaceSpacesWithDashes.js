const replaceSpacesWithDashes = (characterDescription) => {
    const fixedCharacterDescription = characterDescription.replace(/\s+/g, '-');
    return fixedCharacterDescription;
};

export default replaceSpacesWithDashes;