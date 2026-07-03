import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RemateTerrenosApp} from './RemateTerrenosApp.tsx'
import { initMetaPixel } from './lib/metaPixel.ts';

initMetaPixel();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RemateTerrenosApp />
  </StrictMode>,
)
