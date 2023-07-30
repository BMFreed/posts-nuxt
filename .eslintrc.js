const deepmerge = require('deepmerge')

const featureSlicedConfig = require('./eslint/featureSlicedConfig')
const baseConfig = require('./eslint/baseConfig')

module.exports = deepmerge(featureSlicedConfig, baseConfig)
