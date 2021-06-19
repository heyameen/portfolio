// const {PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER} = require('next/constants')
// module.exports = (phase, {defaultConfig}) => {
//     if(phase === PHASE_DEVELOPMENT_SERVER){
//         console.log('Im in Dev mode')
//         return defaultConfig
//     }

//     return defaultConfig;
// }

const nextEnv = require('next-env');
const dotenvload = require('dotenv-load');

dotenvload();

const withNextEnv = nextEnv();
module.exports = withNextEnv();
