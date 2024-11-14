export const formatSectionTitle = (input) => {
    return input
        .split('-') // Spliting the string by dashes
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // making the string's the first letter Capitalize  and lower the rest
        .join(' '); // Join the words with spaces
};