'use client';

import * as React from 'react';

import AppPopover from '../../app-popover';

export function AppNavbar() {
  return (
    <div className="absolute right-4 top-4">
      <AppPopover />
    </div>
  );
}
