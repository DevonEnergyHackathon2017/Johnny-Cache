export const environment = {
  production: true,
  odataConfig: [{
    name: "AppLibrary",
    baseUrl: "https://dvnstg-AppLibraryAPI.azurewebsites.net/",
    resource: "https://dvn.onmicrosoft.com/e7d6d5ef-8771-4c7d-bbe2-3173d30310a5"
}],
adalConfig: {
      tenant: "dvn.onmicrosoft.com",
      clientId: "e4d76d66-759f-42cd-b892-3033690826fa",
      endpoints: {
          "https://dvnstg-AppLibraryAPI.azurewebsites.net/": "https://dvn.onmicrosoft.com/e7d6d5ef-8771-4c7d-bbe2-3173d30310a5"
      }
  }
};
