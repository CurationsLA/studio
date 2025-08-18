'use server';

/**
 * @fileOverview Analyzes existing content and identifies gaps in coverage or areas for more in-depth information.
 *
 * - analyzeContentGaps - A function that handles the content gap analysis process.
 * - ContentGapAnalysisInput - The input type for the analyzeContentGaps function.
 * - ContentGapAnalysisOutput - The return type for the analyzeContentGaps function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentGapAnalysisInputSchema = z.object({
  existingContent: z
    .string()
    .describe('The existing content to analyze.'),
  keywords: z.string().describe('Relevant keywords related to the content.'),
  targetAudience: z.string().describe('Description of the target audience.'),
});
export type ContentGapAnalysisInput = z.infer<typeof ContentGapAnalysisInputSchema>;

const ContentGapAnalysisOutputSchema = z.object({
  identifiedGaps: z
    .string()
    .describe(
      'Identified content gaps and areas for improvement to provide more in-depth information.'
    ),
  suggestedTopics: z
    .string()
    .describe('Suggested topics to cover based on the identified gaps.'),
});
export type ContentGapAnalysisOutput = z.infer<typeof ContentGapAnalysisOutputSchema>;

export async function analyzeContentGaps(
  input: ContentGapAnalysisInput
): Promise<ContentGapAnalysisOutput> {
  return contentGapAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentGapAnalysisPrompt',
  input: {schema: ContentGapAnalysisInputSchema},
  output: {schema: ContentGapAnalysisOutputSchema},
  prompt: `You are a content strategy expert, skilled in identifying gaps and opportunities within existing content.

  Analyze the existing content, keywords, and target audience provided to identify content gaps and areas for improvement. Suggest topics that would fill these gaps and provide more in-depth information for the target audience.

  Existing Content: {{{existingContent}}}
  Keywords: {{{keywords}}}
  Target Audience: {{{targetAudience}}}

  Focus on actionable insights and specific topic suggestions.
  `,
});

const contentGapAnalysisFlow = ai.defineFlow(
  {
    name: 'contentGapAnalysisFlow',
    inputSchema: ContentGapAnalysisInputSchema,
    outputSchema: ContentGapAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
