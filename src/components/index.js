// src/components/index.js

/**
 * Outlet Management System Global Components
 *
 * This file aggregates and re‑exports reusable components for the Outlet Management System.
 * Use these components across your application to maintain consistency and streamline imports.
 *
 * Available components:
 *   - Editor: A rich text editing component.
 *   - FilterItem: A component for filtering and selecting data.
 *   - DropOption: A dropdown option component for action menus.
 *   - Loader: A loading indicator component.
 *   - ScrollBar: A custom scrollbar component for enhanced scrolling.
 *   - GlobalFooter: The global footer used across pages.
 *   - Ellipsis: A text ellipsis component to neatly truncate content.
 *   - MyLayout: A set of layout components and helpers.
 *   - Page: A layout wrapper for defining page structure.
 */

import Editor from './Editor';
import FilterItem from './FilterItem';
import DropOption from './DropOption';
import Loader from './Loader';
import ScrollBar from './ScrollBar';
import GlobalFooter from './GlobalFooter';
import Ellipsis from './Ellipsis';
import * as MyLayout from './Layout/index.js';
import Page from './Page';

export {
  Editor,
  FilterItem,
  DropOption,
  Loader,
  ScrollBar,
  GlobalFooter,
  Ellipsis,
  MyLayout,
  Page,
};