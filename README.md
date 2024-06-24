# Installation

```
npm i nyc -g
npm i qualitywatch -g
npm i qualitywatch
```


# Uses

```
const qualitywatch = require('qualitywatch');
qualitywatch.generateTestCoverage();
```
### Start your app by:
qualitywatch yourCommands

**Example:** qualitywatch npm start


### The report will be available at:
/public/build/coverage/index.html

### The testing tool UI will be available at:
/public/build/coverage/sideBySideView.html