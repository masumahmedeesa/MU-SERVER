module.exports = {
  serverError(response, error) {
    response.status(500).json({message: error})
  },
  resourceError(response, error) {
    response.status(404).json({message: error})
  },
}
