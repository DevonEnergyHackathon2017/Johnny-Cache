export const environment = {
  production: true,
  odataConfig: [{
    name: "AppLibrary",
    baseUrl: "https://dvn-AppLibraryAPI.azurewebsites.net/",
    resource: "https://dvn.onmicrosoft.com/304cbd09-53c2-4048-9d98-ed093b6d7ab8"
}],
adalConfig: {
      tenant: "dvn.onmicrosoft.com",
      clientId: "c5c98a9d-8c4b-43f5-9deb-c08eea0cfecf",
      endpoints: {
          "https://dvn-AppLibraryAPI.azurewebsites.net/": "https://dvn.onmicrosoft.com/304cbd09-53c2-4048-9d98-ed093b6d7ab8"
      }
  }
};
