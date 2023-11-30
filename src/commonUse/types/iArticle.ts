// export interface iArticle {
//   author: string | null
//   content: string
//   description: string
//   publishedAt: string
//   source: {
//     id: string | null,
//     name: string
//   }
//   title: string
//   url: string
//   urlToImage: string | null
// }

export interface iArticle {
  "@id": "string",
  "uid": "string",
  "title": "string",
  "description": "string",
  "images": [
    {
      "original": "string",
      "thumb": "string"
    }
  ],
  "crimeCategory": "string",
  "maker": "string",
  "materials": "string",
  "measurements": "string",
  "period": "string",
  "additionalData": "string",
  "modified": "string",
  "publication": "string",
  "path": "string",
  "referenceNumber": "string"
  "url": "string",
}

// {
//   "additionalData": "morgan; 1885; dollar; coin",
//   "crimeCategory": "coins-and-paper-money",
//   "maker": null,
//   "title": "1885 Morgan dollar",
//   "uid": "534f305bf39f482285c88157d1528d3c",
//   "images": [
//   {
//     "large": "https://artcrimes.fbi.gov/image-repository/coin-20-coin-only.png/@@images/image/large",
//     "caption": "",
//     "original": "https://artcrimes.fbi.gov/image-repository/coin-20-coin-only.png",
//     "thumb": "https://artcrimes.fbi.gov/image-repository/coin-20-coin-only.png/@@images/image/thumb"
//   }
// ],
//   "measurements": "Diameter: 38.1 mm",
//   "path": "/nsaf/1885-morgan-dollar",
//   "modified": "2023-11-16T16:10:19+00:00",
//   "period": "1885",
//   "url": "https://www.fbi.gov/nsaf/1885-morgan-dollar",
//   "isStealth": false,
//   "materials": null,
//   "idInAgency": "01205",
//   "referenceNumber": "01205",
//   "description": "1885 Morgan dollar, silver in color, slabbed, serial number 7164.65/25625412, ms65 (mint state) 65 \"s\" on lower reverse side",
//   "@id": "https://api.fbi.gov/@artcrimes/534f305bf39f482285c88157d1528d3c"
// },
