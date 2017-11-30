export const environment = {
  production: true,
  odataConfig: [{
    name: "AppLibrary",
    baseUrl: "https://dvnstg-AppLibraryAPI-dev.azurewebsites.net/",
    resource: "https://dvn.onmicrosoft.com/6c923af0-16b7-4f8d-990f-20b04c73d208"
}],
adalConfig: {
      tenant: "dvn.onmicrosoft.com",
      clientId: "b7c1b74c-f121-4b54-bc5d-b7d73d38e619",
      endpoints: {
          "https://dvnstg-AppLibraryAPI-dev.azurewebsites.net/": "https://dvn.onmicrosoft.com/6c923af0-16b7-4f8d-990f-20b04c73d208"
      }
  }
};
