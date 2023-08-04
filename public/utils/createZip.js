const AdmZip = require('adm-zip')
const fs = require('fs')

 
export default async function createZip(filesPath, zipPath){
    fs.mkdirSync('./public/zip', {recursive: true})
    const zip = new AdmZip();
    zip.addLocalFolder(filesPath);
    console.log('new zip created')
    zip.writeZip(zipPath);

}



// export default async function updateZip(newFilesPath, existingZipPath ) {
//   try {
//     const existingZip = new AdmZip(existingZipPath);

//     // Add new files or update existing files in the zip
//     existingZip.addLocalFolder(newFilesPath); // The second argument is the optional zip folder path

//     // Write the changes back to the existing zip file
//     const updatedZipBuffer = existingZip.toBuffer();
//     await fs.writeFile(existingZipPath, updatedZipBuffer);

//     console.log('Zip file updated successfully');
//   } catch (error) {
//     console.error('Error updating zip file:', error);
//   }
// }