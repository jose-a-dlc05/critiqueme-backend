import express from "express";
import {
  getSuggestions,
  getSuggestion,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
} from "../controller/suggestions";
const router = express.Router();

router.route("/").get(getSuggestions).post(createSuggestion);

router
  .route("/:id")
  .get(getSuggestion)
  .put(updateSuggestion)
  .delete(deleteSuggestion);

export default router;
