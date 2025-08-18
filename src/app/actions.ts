
'use server';

import { analyzeContentGaps, ContentGapAnalysisInput } from '@/ai/flows/content-gap-analysis';
import { generateAxiosSummary, AxiosSummaryInput } from '@/ai/flows/axios-summary';
import { z } from 'zod';

const contentGapSchema = z.object({
  existingContent: z.string().min(10, 'Please provide more content to analyze.'),
  keywords: z.string().min(3, 'Please provide some keywords.'),
  targetAudience: z.string().min(5, 'Please describe the target audience.'),
});

const axiosSummarySchema = z.object({
  text: z.string().min(20, 'Please provide more text to summarize.'),
});

export interface ContentGapState {
  gaps?: string;
  topics?: string;
  errors?: {
    existingContent?: string[];
    keywords?: string[];
    targetAudience?: string[];
    _form?: string;
  };
};

export interface AxiosSummaryState {
  summary?: string;
  errors?: {
    text?: string[];
    _form?: string;
  };
};

export async function handleContentGapAnalysis(
  prevState: ContentGapState,
  formData: FormData
): Promise<ContentGapState> {
  const validatedFields = contentGapSchema.safeParse({
    existingContent: formData.get('existingContent'),
    keywords: formData.get('keywords'),
    targetAudience: formData.get('targetAudience'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await analyzeContentGaps(validatedFields.data as ContentGapAnalysisInput);
    if(!result) {
      return { errors: { _form: 'Analysis failed. Please try again.' } };
    }
    return {
      gaps: result.identifiedGaps,
      topics: result.suggestedTopics,
    };
  } catch (e) {
    return { errors: { _form: 'An error occurred during analysis.' } };
  }
}

export async function handleAxiosSummary(
  prevState: AxiosSummaryState,
  formData: FormData
): Promise<AxiosSummaryState> {
  const validatedFields = axiosSummarySchema.safeParse({
    text: formData.get('text'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateAxiosSummary(validatedFields.data as AxiosSummaryInput);
    if(!result) {
      return { errors: { _form: 'Summarization failed. Please try again.' } };
    }
    return {
      summary: result.summary,
    };
  } catch (e) {
    return { errors: { _form: 'An error occurred during summarization.' } };
  }
}
