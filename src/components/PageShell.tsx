import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';

interface PageShellProps {
  title: React.ReactNode;
  eyebrow: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  parent?: { to: string; label: string };
}

export function PageHeader({
  title,
  eyebrow,
  description,
}: Pick<PageShellProps, 'title' | 'eyebrow' | 'description'>) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <div className="page-description">{description}</div>}
    </header>
  );
}

export default function PageShell({
  title,
  eyebrow,
  description,
  children,
  className = '',
  parent = { to: '/portfolio', label: 'The work' },
}: PageShellProps) {
  return (
    <motion.div
      className={`page-shell ${className}`}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <Link className="back-link" to={parent.to}>
        <span aria-hidden="true">←</span> {parent.label}
      </Link>
      <PageHeader title={title} eyebrow={eyebrow} description={description} />
      {children}
    </motion.div>
  );
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <span aria-hidden="true"> ↗</span>
    </Link>
  );
}

export function Tags({ items, label = 'Technologies' }: { items: string[]; label?: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
