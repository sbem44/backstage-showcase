export const waitsObjs = {
  MuiLinearProgress: 'div[class*="MuiLinearProgress-root"]',
  MuiCircularProgress: '[class*="MuiCircularProgress-root"]',
};

export const UIhelperPO = {
  MuiButtonLabel: 'span[class^="MuiButton-label"]',
  MuiToggleButtonLabel: 'span[class^="MuiToggleButton-label"]',
  MuiBoxLabel: 'div[class*="MuiBox-root"] label',
  MuiTableHead: 'th[class*="MuiTableCell-root"]',
  MuiTableCell: 'td[class*="MuiTableCell-root"]',
  MuiTableRow: 'tr[class*="MuiTableRow-root"]',
  MuiTypographyColorPrimary: ".MuiTypography-colorPrimary",
  MuiSwitchColorPrimary: ".MuiSwitch-colorPrimary",
  MuiButtonTextPrimary: ".MuiButton-textPrimary",
  MuiCard: (cardHeading) =>
    `//div[contains(@class,'MuiCardHeader-root') and descendant::*[text()='${cardHeading}']]/..`,
  MuiTable: "table.MuiTable-root",
  MuiCardHeader: 'div[class*="MuiCardHeader-root"]',
  MuiInputBase: 'div[class*="MuiInputBase-root"]',
  MuiTypography: 'span[class*="MuiTypography-root"]',
  MuiAlert: 'div[class*="MuiAlert-message"]',
  tabs: '[role="tab"]',
  rowByText: (text: string) => `tr:has(:text-is("${text}"))`,
};
