import * as aiService from '../services/aiService.js';

export const getAIResponse = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ success: false, message: 'Prompt/Question is required' });
    }

    const completion = await aiService.getAICompletion(prompt);
    
    // Structure the response professionally
    res.status(200).json({ 
      success: true,
      data: completion.choices[0].message,
      metadata: {
        model: completion.model,
        usage: completion.usage,
        finish_reason: completion.choices[0].finish_reason
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};
