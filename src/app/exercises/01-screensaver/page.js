'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const COLORS = [
  'maroon',
  'fuchsia',
  'teal',
  'aqua',
  'darkmagenta',
  'deeppink',
  'limegreen',
];

const BASE_URL = '/exercises/01-screensaver';

function ScreenSaverExercise() {
  const router = useRouter();
  return (
    <main>
      <p>Choose color:</p>
      <ul>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`${BASE_URL}/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
