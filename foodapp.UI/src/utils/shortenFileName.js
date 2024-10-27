// src/utils.js
export const truncateFileName = (fileName, maxLength = 20) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const extension = fileName.split('.').pop();
    const nameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncatedName = nameWithoutExtension.slice(0, maxLength / 2) + '.....' + nameWithoutExtension.slice(-3);
    return truncatedName + '.' + extension;
  };
  