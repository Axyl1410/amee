import { google } from "@ai-sdk/google";
import { customProvider } from "ai";
import { isTestEnvironment } from "../constants";

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "chat-model-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : customProvider({
      languageModels: {
        "chat-model": google.languageModel("gemini-2.5-flash"),
        "chat-model-reasoning": google.languageModel("gemini-2.5-pro"),
        "title-model": google.languageModel("gemini-2.5-flash"),
        "artifact-model": google.languageModel("gemini-2.5-flash"),
      },
    });
