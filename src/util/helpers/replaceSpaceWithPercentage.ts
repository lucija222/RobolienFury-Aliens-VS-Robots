const replaceSpaceWithPercentage = (characterDescription: string): string => {
    const fixedCharacterDescription = characterDescription.replace(/\s+/g, '%');
    return fixedCharacterDescription;
};

export default replaceSpaceWithPercentage;