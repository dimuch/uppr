// Utility functions for case study slug conversion
// These are pure functions with no server-side dependencies

// Convert title to slug (spaces to underscores, lowercase)
export function titleToSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '_');
}

// Convert slug back to title (underscores to spaces)
export function slugToTitle(slug) {
  return decodeURIComponent(slug).replace(/_/g, ' ');
}
