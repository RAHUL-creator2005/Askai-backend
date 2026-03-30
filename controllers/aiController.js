import * as aiService from '../services/aiService.js';

export const getAIResponse = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt/Question is required' });
    }

    const response = await aiService.getAICompletion(prompt);
    res.status(200).json({ data: response });
  } catch (error) {
    next(error);
  }
};
