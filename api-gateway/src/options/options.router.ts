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

// PUT
OptionsRouter.put(
  "/update",
  OptionsValidator.isUpdateUserOptionsValid,
  OptionsController.updateMyOptions
);

OptionsRouter.put(
  "/add-favorite-commander",
  OptionsValidator.isModifyUserFavoriteCommandersValid,
  OptionsController.addFavoriteCommander
);

OptionsRouter.put(
  "/remove-favorite-commander",
  OptionsValidator.isModifyUserFavoriteCommandersValid,
  OptionsController.removeFavoriteCommander
);

export default OptionsRouter;
