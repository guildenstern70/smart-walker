/*
 * PIXEL WALKER
 *
 * Copyright (c) 2025, Alessio Saltarin
 * This software is licensed under BSD license - see LICENSE file.
 *
 */

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
