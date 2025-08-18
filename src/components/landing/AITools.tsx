
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleContentGapAnalysis, handleAxiosSummary, ContentGapState, AxiosSummaryState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2, Newspaper } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

function SubmitButton({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
      {children}
    </Button>
  );
}

export default function AITools() {
  const { toast } = useToast();
  
  const initialGapState: ContentGapState = {};
  const [gapState, gapFormAction] = useFormState(handleContentGapAnalysis, initialGapState);

  const initialSummaryState: AxiosSummaryState = {};
  const [summaryState, summaryFormAction] = useFormState(handleAxiosSummary, initialSummaryState);

  useEffect(() => {
    if (gapState.errors?._form) {
      toast({ variant: 'destructive', title: 'Analysis Error', description: gapState.errors._form });
    }
    if (summaryState.errors?._form) {
      toast({ variant: 'destructive', title: 'Summary Error', description: summaryState.errors._form });
    }
  }, [gapState, summaryState, toast]);

  return (
    <section id="ai-tools" className="py-24 sm:py-32">
      <div className="container max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-primary">AI-Powered Insights</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Your AI Content Co-Pilot</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Leverage our custom-built AI tools to discover content gaps and generate pitch-perfect summaries in seconds.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><Wand2 className="text-accent" /> AI Content Gap Finder</CardTitle>
              <CardDescription>Identify what's missing from your content strategy to better serve your audience.</CardDescription>
            </CardHeader>
            <form action={gapFormAction}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="existingContent">Existing Content</Label>
                  <Textarea id="existingContent" name="existingContent" placeholder="Paste your blog post, article, or website copy here..." rows={5} required />
                  {gapState.errors?.existingContent && <p className="text-sm text-destructive">{gapState.errors.existingContent[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input id="keywords" name="keywords" placeholder="e.g., brand strategy, digital marketing, LA restaurants" required />
                  {gapState.errors?.keywords && <p className="text-sm text-destructive">{gapState.errors.keywords[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input id="targetAudience" name="targetAudience" placeholder="e.g., Small business owners, marketing managers" required />
                  {gapState.errors?.targetAudience && <p className="text-sm text-destructive">{gapState.errors.targetAudience[0]}</p>}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Powered by GenAI</p>
                <SubmitButton icon={<Wand2 className="mr-2 h-4 w-4" />}>Analyze Gaps</SubmitButton>
              </CardFooter>
            </form>
            {gapState.gaps && (
              <div className="p-6 border-t">
                <h3 className="font-headline text-lg font-semibold">Analysis Results</h3>
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary">Identified Gaps</h4>
                    <p className="text-muted-foreground whitespace-pre-wrap">{gapState.gaps}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Suggested Topics</h4>
                    <p className="text-muted-foreground whitespace-pre-wrap">{gapState.topics}</p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><Newspaper className="text-accent" /> Axios-Style Summarizer</CardTitle>
              <CardDescription>Generate concise, 'Axios brevity' style summaries for your services or articles.</CardDescription>
            </CardHeader>
            <form action={summaryFormAction}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text">Text to Summarize</Label>
                  <Textarea id="text" name="text" placeholder="Paste your service description or any text to summarize..." rows={10} required />
                  {summaryState.errors?.text && <p className="text-sm text-destructive">{summaryState.errors.text[0]}</p>}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Powered by GenAI</p>
                <SubmitButton icon={<Newspaper className="mr-2 h-4 w-4" />}>Generate Summary</SubmitButton>
              </CardFooter>
            </form>
            {summaryState.summary && (
              <div className="p-6 border-t">
                <h3 className="font-headline text-lg font-semibold">Generated Summary</h3>
                <div className="mt-4 text-sm text-muted-foreground whitespace-pre-wrap prose prose-sm max-w-none">
                  {summaryState.summary}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
