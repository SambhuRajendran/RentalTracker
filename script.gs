function updateVideoLinks() {
  const folderId = "YOURFOLDERID_IT"; // Your Google Drive folder ID
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1");
  const files = DriveApp.getFolderById(folderId).getFiles();
  const data = sheet.getDataRange().getValues();

  while (files.hasNext()) {
    const file = files.next();
    const fileName = file.getName().trim(); // Clean up spaces
    const fileUrl = file.getUrl();

    for (let i = 1; i < data.length; i++) {
      const sheetFileName = data[i][12]?.toString().trim(); // Column M (index 12)
      const currentLink = data[i][13]; // Column N (index 13)

      // Only update if file names match and the link is blank
      if (sheetFileName && sheetFileName === fileName && !currentLink) {
        sheet.getRange(i + 1, 14).setValue(fileUrl); // Column N = 14 (1-based)
        Logger.log(`✅ Row ${i + 1}: Link added for "${fileName}"`);
      }
    }
  }
}
