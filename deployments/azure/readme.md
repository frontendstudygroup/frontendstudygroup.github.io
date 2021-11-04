## Alternate Deployment Methods
This is a GitHub Action yml file that will deploy the current React web application to [Azure Static Web Apps](http://<link to doc>). It is placed here as there is no Azure account to tie it to just yet. 

### Setup
To set up an Azure Static Web App using GitHub, follow the directions highlighted in [this](https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript)
documentation article.

```
1. Set up your static web app repository on Github
2. Create an account on the Azure portal
3. Using the Azure portal, select "create a new project" option.
4. Fill in the details of your project, and link your Github account to Azure.
5. Select "create" after which the build .yml files will be created in your 
Github repository and begin deployment using Github Actions.
```
