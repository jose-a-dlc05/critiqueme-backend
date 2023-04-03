// @desc      Get all suggestions
// @route     GET /api/v1/suggestions
// @access    Public

export const getSuggestions = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show all suggestions` });
};
// @desc      Get single suggestion
// @route     GET /api/v1/suggestions/:id
// @access    Public

export const getSuggestion = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show suggestion ${req.params.id}` });
};
// @desc      Create new suggestion
// @route     POST /api/v1/suggestions
// @access    Private

export const createSuggestion = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new suggestion` });
};
// @desc      Update suggestion
// @route     GET /api/v1/suggestions/:id
// @access    Private

export const updateSuggestion = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated suggestion ${req.params.id}` });
};
// @desc      Delete suggestion
// @route     GET /api/v1/suggestions/:id
// @access    Private

export const deleteSuggestion = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Deleted suggestion ${req.params.id}` });
};
