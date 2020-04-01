const filesToExtend = [
  './extends/overrides',
  './extends/parser',
  './extends/settings'
]

module.exports = {
  extends: filesToExtend.map(require.resolve)
}
