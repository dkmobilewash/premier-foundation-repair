import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from './App';
import { takeCollectedHead, type HeadPayload } from './lib/head';

export interface RenderResult {
  html: string;
  head: HeadPayload | null;
}

/** Render one route to HTML, plus the head payload its <Seo> collected. */
export function render(url: string): RenderResult {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: takeCollectedHead() };
}
