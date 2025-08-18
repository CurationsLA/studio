 'use server';

/**
 * @fileOverview A flow for generating Axios-style summaries of services.
 *
 * - generateAxiosSummary - A function that generates a concise Axios-style summary.
 * - AxiosSummaryInput - The input type for the generateAxiosSummary function.
 * - AxiosSummaryOutput - The return type for the generateAxiosSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AxiosSummaryInputSchema = z.object({
  text: z.string().describe('The text to summarize in Axios style.'),
});
export type AxiosSummaryInput = z.infer<typeof AxiosSummaryInputSchema>;

const AxiosSummaryOutputSchema = z.object({
  summary: z.string().describe('The Axios-style summary of the input text.'),
});
export type AxiosSummaryOutput = z.infer<typeof AxiosSummaryOutputSchema>;

export async function generateAxiosSummary(input: AxiosSummaryInput): Promise<AxiosSummaryOutput> {
  return axiosSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'axiosSummaryPrompt',
  input: {schema: AxiosSummaryInputSchema},
  output: {schema: AxiosSummaryOutputSchema},
  prompt: `You are an expert in creating Axios-style summaries. Please summarize the following text in a concise and informative manner, using short sentences and bullet points where appropriate. Focus on the key takeaways and present them in a way that is easy to understand for busy marketing professionals.\n\nText: {{{text}}}`,
});

const axiosSummaryFlow = ai.defineFlow(
  {
    name: 'axiosSummaryFlow',
    inputSchema: AxiosSummaryInputSchema,
    outputSchema: AxiosSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
