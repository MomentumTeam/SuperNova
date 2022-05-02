import { Router } from "express";
import OptionsController from "./options.controller";
import { OptionsValidator } from "./options.validator";

const OptionsRouter: Router = Router();

// GET
OptionsRouter.get(
  "/",
  OptionsValidator.isGetUserOptionsValid,
  OptionsController.getMyOptions
);

// PATCH
OptionsRouter.patch(
  "/update",
  OptionsValidator.isUpdateUserOptionsValid,
  OptionsController.updateMyOptions
);

// POST
OptionsRouter.post(
  "/favorite-commander",
  OptionsValidator.isModifyUserFavoriteCommandersValid,
  OptionsController.addFavoriteCommander
);

OptionsRouter.delete(
  "/favorite-commander",
  OptionsValidator.isModifyUserFavoriteCommandersValid,
  OptionsController.removeFavoriteCommander
);

export default OptionsRouter;
