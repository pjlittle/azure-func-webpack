# azure-func-webpack
Example Azure Function (JavaScript) that uses Webpack 4.x with the Serverless Framework

Two dependencies (`lodash` and `@azure/ms-rest-nodeauth`) are referenced in an Azure Function handler (`randomNumber.js`).  Webpack is used to create self-contained function bundles, without packaging and deploying `node_modules/`.

## Package Size Comparison

| Regular Deployment | Webpack Deployment |
|--------------------|--------------------|
| 6.3MB              | 365KB              |
|                    |                    |

for these two dependencies, Webpack is producting deployment zip packages that are ~94% smaller.
